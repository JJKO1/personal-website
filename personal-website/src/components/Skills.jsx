import { motion } from 'motion/react';
import { useI18n } from '../i18n/context';

export default function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills">
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {t.skills.label}
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {t.skills.title}
        </motion.h2>
        {t.skills.groups.map((group, gi) => (
          <motion.div
            className="skill-group"
            key={gi}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.1 * gi, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="skill-group-name">{group.name}</p>
            <div className="skill-tags">
              {group.tags.map((tag) => (
                <span className="skill-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
