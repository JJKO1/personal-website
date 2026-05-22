import { motion } from 'motion/react';
import { useI18n } from '../i18n/context';

export default function Feed() {
  const { t } = useI18n();
  const ease = [0.25, 0.1, 0.25, 1];

  return (
    <section id="feed">
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, ease }}
        >
          {t.feed.label}
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.08, ease }}
        >
          {t.feed.title}
        </motion.h2>
        <div className="feed-grid">
          {t.feed.items.map((item, i) => (
            <motion.a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="feed-card"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: 0.08 * i, ease }}
              whileHover={{ y: -3 }}
            >
              <div className="feed-card-top">
                <span className="feed-tag">{item.tag}</span>
                <span className="feed-date">{item.date}</span>
              </div>
              <h3 className="feed-title">{item.title}</h3>
              <p className="feed-desc">{item.description}</p>
              <div className="feed-source">
                <span>{item.source}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
