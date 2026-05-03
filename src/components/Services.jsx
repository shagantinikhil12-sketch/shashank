import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import styles from './Services.module.css';

const servicesList = [
  {
    title: 'Photo Editing',
    description: 'Professional retouching, skin correction, color enhancement'
  },
  {
    title: 'Color Grading',
    description: 'Cinematic LUT-based grading for photos and video'
  },
  {
    title: 'Video Editing',
    description: 'Cut, pace, and story-driven editing for all formats'
  },
  {
    title: 'Reels & Shorts',
    description: 'Fast-paced social content optimized for engagement'
  },
  {
    title: 'Motion Graphics',
    description: 'Titles, transitions, animated overlays, and lower thirds'
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
