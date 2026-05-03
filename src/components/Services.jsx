import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import styles from './Services.module.css';

const servicesList = [
  {
    title: 'Photo Retouching',
    description: 'Professional skin cleanup, object removal, portrait enhancement and commercial polish.'
  },
  {
    title: 'Color Grading',
    description: 'Cinematic LUT-based grading for moody, luxury and film-like visual tones.'
  },
  {
    title: 'Video Editing',
    description: 'Clean storytelling edits for YouTube, promo videos, ads and branded content.'
  },
  {
    title: 'Reels & Shorts',
    description: 'Fast-paced vertical edits optimized for engagement and retention.'
  },
  {
    title: 'Motion Graphics',
    description: 'Titles, captions, transitions, logo animation and animated overlays.'
  }
];

const Services = () => {
  const { ref, className } = useScrollFadeIn();

  return (
    <section className={styles.services} id="services">
      <div className={`container ${className}`} ref={ref}>
        <div className={styles.list}>
          {servicesList.map((service, index) => (
            <div key={index} className={styles.row}>
              <div className={styles.rowContent}>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
              </div>
              <hr className={styles.divider} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
