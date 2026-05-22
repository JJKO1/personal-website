import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations as fallback } from './translations';

const I18nContext = createContext();
const CONTENT_URL = import.meta.env.BASE_URL + 'content.json';

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('lang') || 'en';
    } catch {
      return 'en';
    }
  });

  const [content, setContent] = useState(fallback);

  useEffect(() => {
    // Fetch fresh content every page load — no cache, no stale data
    fetch(CONTENT_URL + '?v=' + Date.now())
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (data.en && data.zh) {
          setContent(data);
        }
      })
      .catch(() => {
        // Fetch failed — keep using bundled fallback
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
