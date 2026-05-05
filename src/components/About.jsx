import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import styles from './About.module.css';

const About = () => {
  const { ref, className } = useScrollFadeIn();

  return (
    <section className={styles.about} id="about">
      <div className={`container ${styles.container} ${className}`} ref={ref}>
        <div className={styles.label}>WHO WE ARE</div>
        <div className={styles.content}>
          <div className={styles.mainText}>
            <p>I help creators, brands and photographers transform ordinary photos and footage into visually premium content that feels cinematic, modern and commercially powerful.</p>
          </div>
          <div className={styles.secondaryText}>
            <p>From high-end skin retouching and advanced color grading to YouTube videos, reels, ads and motion graphics — each project is edited with precision, emotion and storytelling in mind.</p>
            <a href="#works" className={`hover-target ${styles.link}`}>Discover more ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
