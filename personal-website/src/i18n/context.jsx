import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations as fallback } from './translations';

const I18nContext = createContext();
const CACHE_KEY = 'site_content_v1';
const CONTENT_URL = import.meta.env.BASE_URL + 'content.json';

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('lang') || 'en';
    } catch {
      return 'en';
    }
  });

  const [content, setContent] = useState(() => {
    // Load cached content instantly so there's zero flash
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed.en && parsed.zh) return parsed;
      }
    } catch {}
    return fallback;
  });

  useEffect(() => {
    // Fetch fresh content in background, update if changed
    fetch(CONTENT_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (data.en && data.zh) {
          setContent(data);
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(data));
          } catch {}
        }
      })
      .catch(() => {
        // Content fetch failed — keep using current (cached or fallback)
      });
  }, []);

  const t = content[lang] || fallback[lang] || fallback.en;

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'en' ? 'zh' : 'en';
      try {
        localStorage.setItem('lang', next);
      } catch {}
      return next;
    });
  }, []);

  return (
    <I18nContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
