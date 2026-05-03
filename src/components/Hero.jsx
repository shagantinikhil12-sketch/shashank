import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.background}>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h1 className={`${styles.title} ${loaded ? styles.visible : ''}`}>
            <span className={styles.titleInner}>shashank</span>
          </h1>
          <h2 className={`${styles.subtitle} ${loaded ? styles.visible : ''}`}>Cinematic Photo & Video Editor</h2>
        </div>

        <div className={styles.tagline}>
          <p className={`${styles.premiumText} ${loaded ? styles.visible : ''}`}>Crafting premium visuals for creators, brands and businesses.</p>
          <div className={`${styles.ctaGroup} ${loaded ? styles.visible : ''}`}>
            <a href="#works" className={`hover-target ${styles.button}`}>View Work</a>
            <a href="#contact" className={`hover-target ${styles.button}`}>Book Project</a>
          </div>
        </div>

        <div className={`${styles.trustStrip} ${loaded ? styles.visible : ''}`}>
          <span>50+ Projects Delivered</span>
          <span className={styles.dot}>•</span>
          <span>Fast Turnaround</span>
          <span className={styles.dot}>•</span>
          <span>Reels Specialist</span>
          <span className={styles.dot}>•</span>
          <span>Premium Retouching</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
