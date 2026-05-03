import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import styles from './Trust.module.css';

const Trust = () => {
  const { ref, className } = useScrollFadeIn();

  return (
    <section className={styles.trust} id="trust">
      <div className={`container ${styles.container} ${className}`} ref={ref}>
        <div className={styles.labelWrapper}>
          <span className={styles.dot}></span>
          <span className={styles.label}>WHY CLIENTS WORK WITH ME</span>
        </div>
        
        <h2 className={styles.heading}>Precision. Speed. Premium Results.</h2>
        
        <div className={styles.columns}>
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Fast Delivery</h3>
          </div>
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Professional Cinematic Finish</h3>
          </div>
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Revision Friendly Workflow</h3>
          </div>
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Social Media Ready Output</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
