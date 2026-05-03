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
            <p>We're a creative digital agency fueled by passion and innovation. Our mission is to revolutionize creative work for companies with style and substance.</p>
          </div>
          <div className={styles.secondaryText}>
            <p>Welcome to AGNO, where creativity meets technology to transform your brand's online presence. We are passionate about delivering innovative solutions tailored to your unique goals.</p>
            <a href="#discover" className={`hover-target ${styles.link}`}>Discover more ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
