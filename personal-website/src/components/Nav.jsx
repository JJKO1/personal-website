import { useState, useEffect, useCallback } from 'react';
import { useI18n } from '../i18n/context';

const links = ['about', 'experience', 'projects', 'skills', 'feed', 'contact'];

export default function Nav() {
  const { t, lang, toggleLang } = useI18n();
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const sections = links
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeMenu]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = () => closeMenu();

  return (
    <nav className="nav">
      <div className="nav-inner">
        <span className="nav-logo">Jonah</span>

        {/* Desktop nav */}
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {links.map((key) => (
            <li key={key}>
              <a
                href={`#${key}`}
                className={active === key ? 'active' : ''}
                onClick={handleNavClick}
              >
                {t.nav[key]}
              </a>
            </li>
          ))}
          <li>
            <button
              className="lang-toggle"
              onClick={toggleLang}
              aria-label="Toggle language"
            >
              {lang === 'en' ? '中文' : 'EN'}
            </button>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Mobile overlay */}
        <div
          className={`nav-overlay${menuOpen ? ' visible' : ''}`}
          onClick={closeMenu}
        />
      </div>
    </nav>
  );
}
