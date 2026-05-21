import { motion } from 'motion/react';
import { useI18n } from '../i18n/context';

export default function Contact() {
  const { t } = useI18n();
  const ease = [0.25, 0.1, 0.25, 1];

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-center">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, ease }}
        >
          {t.contact.label}
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.08, ease }}
        >
          {t.contact.title}
        </motion.h2>
        <motion.p
          style={{ color: 'var(--muted)', marginBottom: 24 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: 0.15, ease }}
        >
          {t.contact.text}
        </motion.p>
        <motion.div
          className="contact-links"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: 0.2, ease }}
        >
          <a href="mailto:1625963557@qq.com" className="contact-link">
            {t.contact.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
