import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import styles from './Testimonials.module.css';

const testimonialsData = [
  {
    id: 1,
    quote: "Our reels now look ten times more premium.",
    author: "Creator Client"
  },
  {
    id: 2,
    quote: "Shashank's color grading completely transformed the mood of our brand campaign.",
    author: "Fashion Brand"
  },
  {
    id: 3,
    quote: "Fastest turnaround with zero compromise on the cinematic quality.",
    author: "Agency Director"
  }
];

const Testimonials = () => {
  const { ref, className } = useScrollFadeIn();

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={`container ${styles.container} ${className}`} ref={ref}>
        <h2 className={styles.heading}>client words</h2>
        
        <div className={styles.grid}>
          {testimonialsData.map((testimonial, index) => (
            <div key={testimonial.id} className={styles.item} style={{ transitionDelay: `${index * 0.2}s` }}>
              <div className={styles.quoteMark}>"</div>
              <p className={styles.quote}>{testimonial.quote}</p>
              <div className={styles.authorBlock}>
                <p className={styles.author}>{testimonial.author.split(' - ')[0] || testimonial.author}</p>
                <p className={styles.designation}>{testimonial.author.split(' - ')[1] || 'Verified Client'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
