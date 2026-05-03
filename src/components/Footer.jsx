import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import styles from './Footer.module.css';

const Footer = () => {
  const { ref, className } = useScrollFadeIn();

  return (
    <footer className={styles.footer}>
      <div className={`container ${className}`} ref={ref}>
        <div className={styles.topRow}>
          <div className={styles.col}>
            <a href="mailto:hello@mysite.com" className={`hover-target ${styles.link}`}>hello@mysite.com</a>
            <a href="tel:88002345234" className={`hover-target ${styles.link}`}>8 800 2345 234</a>
          </div>
          
          <div className={styles.col}>
            <span className={styles.label}>HOW TO FIND US</span>
            <p className={styles.text}>27 Division St, New York, NY</p>
            <p className={styles.text}>10002, United States</p>
          </div>
          
          <div className={styles.col}>
            <span className={styles.label}>SOCIAL</span>
            <div className={styles.socialIcons}>
              <a href="#" className="hover-target">Fb</a>
              <a href="#" className="hover-target">X</a>
              <a href="#" className="hover-target">Ig</a>
              <a href="#" className="hover-target">In</a>
              <a href="#" className="hover-target">Yt</a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomRow}>
          <div className={styles.watermark}>©2025 — AGNO</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
