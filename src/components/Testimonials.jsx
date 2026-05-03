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
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className={styles.item}>
              <p className={styles.quote}>“{testimonial.quote}”</p>
              <p className={styles.author}>— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
