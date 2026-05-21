import { motion } from 'motion/react';
import { useI18n } from '../i18n/context';

export default function Projects() {
  const { t } = useI18n();
  const ease = [0.25, 0.1, 0.25, 1];

  return (
    <section id="projects">
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, ease }}
        >
          {t.projects.label}
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.08, ease }}
        >
          {t.projects.title}
        </motion.h2>
        {t.projects.items.map((proj, i) => (
          <motion.div
            className="project-card"
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.1 * i, ease }}
            whileHover={{ y: -2 }}
          >
            <div className="project-header">
              <span className="project-name">{proj.name}</span>
              <span className="timeline-date">{proj.date}</span>
            </div>
            <ul className="timeline-desc">
              {proj.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
            <p className="project-tech">{proj.tech}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
