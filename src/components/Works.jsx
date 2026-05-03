import { useState } from 'react';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import styles from './Works.module.css';

const worksImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80', type: 'portrait', category: 'Portrait Retouch' },
  { id: 2, url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', type: 'portrait', category: 'Color Grade' },
  { id: 3, url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80', type: 'square', category: 'Fashion Edit' },
  { id: 4, url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80', type: 'landscape', category: 'Social Media Edit' },
  { id: 5, url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', type: 'portrait', category: 'Studio Edit' },
  { id: 6, url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80', type: 'square', category: 'Portrait Retouch' },
  { id: 7, url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80', type: 'square', category: 'Color Grade' },
  { id: 8, url: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&w=800&q=80', type: 'portrait', category: 'Studio Edit' },
  { id: 9, url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80', type: 'portrait', category: 'Fashion Edit' },
];

const Works = () => {
  const { ref, className } = useScrollFadeIn();

  return (
    <section className={styles.works} id="works">
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeText}>
          <span>selected works · selected works · selected works · </span>
          <span>selected works · selected works · selected works · </span>
        </div>
      </div>

      <div className={`container ${styles.container} ${className}`} ref={ref}>
        <div className={styles.header}>
          <span className={styles.label}>FEATURED PORTFOLIO</span>
        </div>
        
        <div className={styles.grid}>
          {/* Column 1 */}
          <div className={styles.col}>
            <div className={`${styles.imageWrapper} ${styles.portrait} hover-target`}>
              <img src={worksImages[0].url} alt="Work 1" loading="lazy" />
              <div className={styles.overlay}>
                <span className={styles.category}>{worksImages[0].category}</span>
              </div>
            </div>
            
            {/* Before / After Implementation via Hover Swap */}
            <div className={`${styles.imageWrapper} ${styles.portrait} ${styles.beforeAfter} hover-target`}>
              <img src={worksImages[1].url} alt="Work 2 After" className={styles.afterImage} loading="lazy" />
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=20&blur=10" alt="Work 2 Before" className={styles.beforeImage} loading="lazy" />
              <div className={styles.overlay}>
                <span className={styles.category}>Before / After (Hover)</span>
              </div>
            </div>
          </div>
          
          {/* Column 2 */}
          <div className={styles.col}>
            <div className={`${styles.imageWrapper} ${styles.square} hover-target`}>
              <img src={worksImages[2].url} alt="Work 3" loading="lazy" />
              <div className={styles.overlay}>
                <span className={styles.category}>{worksImages[2].category}</span>
              </div>
            </div>
            <div className={`${styles.imageWrapper} ${styles.landscape} hover-target`}>
              <img src={worksImages[3].url} alt="Work 4" loading="lazy" />
              <div className={styles.overlay}>
                <span className={styles.category}>{worksImages[3].category}</span>
              </div>
            </div>
            <div className={`${styles.imageWrapper} ${styles.portrait} hover-target`}>
              <img src={worksImages[4].url} alt="Work 5" loading="lazy" />
              <div className={styles.overlay}>
                <span className={styles.category}>{worksImages[4].category}</span>
              </div>
            </div>
          </div>
          
          {/* Column 3 */}
          <div className={styles.col}>
            <div className={`${styles.imageWrapper} ${styles.square} hover-target`}>
              <img src={worksImages[5].url} alt="Work 6" loading="lazy" />
              <div className={styles.overlay}>
                <span className={styles.category}>{worksImages[5].category}</span>
              </div>
            </div>
            <div className={`${styles.imageWrapper} ${styles.square} hover-target`}>
              <img src={worksImages[6].url} alt="Work 7" loading="lazy" />
              <div className={styles.overlay}>
                <span className={styles.category}>{worksImages[6].category}</span>
              </div>
            </div>
            <div className={`${styles.imageWrapper} ${styles.portrait} hover-target`}>
              <img src={worksImages[7].url} alt="Work 8" loading="lazy" />
              <div className={styles.overlay}>
                <span className={styles.category}>{worksImages[7].category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
