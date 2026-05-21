import { motion } from 'motion/react';
import { useI18n } from '../i18n/context';

export default function About() {
  const { t } = useI18n();

  const ease = [0.25, 0.1, 0.25, 1];

  return (
    <section id="about">
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, ease }}
        >
          {t.about.label}
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.08, ease }}
        >
          {t.about.title}
        </motion.h2>
        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15, ease }}
          >
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </motion.div>
          <motion.ul
            className="info-list"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15, ease }}
          >
            <li>
              <span className="info-label">{t.about.location}</span>
              <strong>{t.about.locationVal}</strong>
            </li>
            <li>
              <span className="info-label">{t.about.email}</span>
              <strong>1625963557@qq.com</strong>
            </li>
            <li>
              <span className="info-label">{t.about.english}</span>
              <strong>{t.about.englishVal}</strong>
            </li>
            <li>
              <span className="info-label">{t.about.education}</span>
              <strong>{t.about.educationVal}</strong>
            </li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
