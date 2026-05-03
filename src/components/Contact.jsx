import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import styles from './Contact.module.css';

const Contact = () => {
  const { ref, className } = useScrollFadeIn();

  return (
    <section className={styles.contact} id="contact">
      <div className={`container ${styles.container} ${className}`} ref={ref}>
        <div className={styles.status}>
          <span className={styles.dot}></span>
          <span className={styles.label}>AVAILABLE FOR WORK</span>
        </div>
        
        <h2 className={styles.heading}>get in touch</h2>
        
        <div className={styles.socials}>
          <a href="#" className="hover-target">Behance</a>
          <span className={styles.separator}>·</span>
          <a href="#" className="hover-target">Dribbble</a>
          <span className={styles.separator}>·</span>
          <a href="#" className="hover-target">Instagram</a>
          <span className={styles.separator}>·</span>
          <a href="#" className="hover-target">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
