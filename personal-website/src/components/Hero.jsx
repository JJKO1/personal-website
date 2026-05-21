import { motion } from 'motion/react';
import { useI18n } from '../i18n/context';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="hero">
      <div className="hero-overlay" />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {t.hero.name}
      </motion.h1>
      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {t.hero.subtitle}
      </motion.p>
      <motion.p
        className="hero-tagline"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {t.hero.tagline}
      </motion.p>
      <motion.a
        href="#contact"
        className="hero-cta"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {t.hero.cta}
      </motion.a>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="mouse" />
      </motion.div>
    </section>
  );
}
