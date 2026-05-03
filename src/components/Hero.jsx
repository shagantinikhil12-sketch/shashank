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
        <h1 className={`${styles.title} ${loaded ? styles.visible : ''}`}>
          <span className={styles.titleInner}>PHOTO AGENCY</span>
        </h1>
        
        <div className={`${styles.tagline} ${loaded ? styles.visible : ''}`}>
          <p>Visual storytelling fueled</p>
          <p>by passion and craft.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
