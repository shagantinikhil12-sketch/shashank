import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import styles from './Showreel.module.css';

const Showreel = () => {
  const { ref, className } = useScrollFadeIn();

  return (
    <section className={styles.showreel} id="showreel">
      <div className={`container ${styles.container} ${className}`} ref={ref}>
        <h2 className={styles.heading}>showreel</h2>

        <div className={styles.videoWrapper}>
          <video
            className={styles.video}
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80"
          >
            {/* Provide a placeholder video or leave empty to just show poster */}
          </video>
          <div className={styles.overlay}>
            <a href="https://youtu.be/QNJL6nfu__Q?si=Xfs8isA6VBjGixrB" target="_blank" rel="noopener noreferrer" className={styles.playButton}>PLAY FULL REEL</a>
          </div>
        </div>

        <p className={styles.caption}>Selected cuts, transitions, grading and storytelling frames.</p>
      </div>
    </section>
  );
};

export default Showreel;
