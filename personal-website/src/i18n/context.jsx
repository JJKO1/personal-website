import { createContext, useContext, useState, useCallback } from 'react';
import { translations } from './translations';

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('lang') || 'en';
    } catch {
      return 'en';
    }
  });

  const t = translations[lang];

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
