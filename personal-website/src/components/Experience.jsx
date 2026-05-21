import { motion } from 'motion/react';
import { useI18n } from '../i18n/context';

export default function Experience() {
  const { t } = useI18n();

  return (
    <section id="experience">
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {t.experience.label}
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {t.experience.title}
        </motion.h2>
        <motion.div
          className="timeline"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="timeline-item">
            <div className="timeline-header">
              <span className="timeline-role">{t.experience.role}</span>
              <span className="timeline-date">{t.experience.date}</span>
            </div>
            <div className="timeline-company">{t.experience.company}</div>
            <ul className="timeline-desc">
              {t.experience.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
