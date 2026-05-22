import { motion } from 'motion/react';

export default function HeroMotion({ t }) {
  const ease = [0.25, 0.1, 0.25, 1];

  return (
    <section className="hero">
      <div className="hero-overlay" />
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease }}
      >
        {t.name}
      </motion.h1>
      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.12, ease }}
      >
        {t.subtitle}
      </motion.p>
      <motion.p
        className="hero-tagline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.24, ease }}
      >
        {t.tagline}
      </motion.p>
      <motion.a
        href="#contact"
        className="hero-cta"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4, ease }}
        whileHover={{ scale: 1.04, boxShadow: '0 4px 40px rgba(126, 184, 218, 0.35)' }}
        whileTap={{ scale: 0.97 }}
      >
        {t.cta}
      </motion.a>

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
