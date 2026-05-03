import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import styles from './Footer.module.css';

const Footer = () => {
  const { ref, className } = useScrollFadeIn();

  return (
    <footer className={styles.footer}>
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeText}>
          <span>©2025 SHASHANK</span>
        </div>
      </div>
      
      <div className={`container ${styles.container} ${className}`} ref={ref}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <h4 className={styles.label}>Contact</h4>
            <a href="mailto:hello@example.com" className="hover-target">hello@example.com</a>
            <a href="tel:+1234567890" className="hover-target">+1 (234) 567-890</a>
          </div>
          
          <div className={styles.col}>
            <h4 className={styles.label}>Socials</h4>
            <a href="#" className="hover-target">Instagram</a>
            <a href="#" className="hover-target">Behance</a>
            <a href="#" className="hover-target">Drive Portfolio</a>
          </div>
          
          <div className={styles.col}>
            <h4 className={styles.label}>Location</h4>
            <p>New York, NY</p>
            <p>Available Worldwide</p>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <p>© 2025 Shashank. All rights reserved.</p>
          <p>Cinematic Editor</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
