import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import styles from './Contact.module.css';

const Contact = () => {
  const { ref: scrollRef, className } = useScrollFadeIn();
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          formRef.current.reset();
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitStatus('error');
          console.error('FAILED...', error.text);
          setTimeout(() => setSubmitStatus(null), 5000);
        }
      );
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={`container ${styles.container} ${className}`} ref={scrollRef}>
        <div className={styles.status}>
          <span className={styles.dot}></span>
          <span className={styles.label}>AVAILABLE FOR WORK</span>
        </div>
        
        <h2 className={styles.heading}>let's create something cinematic</h2>
        <p className={styles.subtitle}>Tell me about your project and get a response within 12 hours.</p>

        <div className={styles.formContainer}>
          <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <input type="text" name="user_name" placeholder="Your Name" required className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
              <input type="email" name="user_email" placeholder="Your Email" required className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
              <textarea name="message" placeholder="Your Message" required className={styles.textarea}></textarea>
            </div>
            <button type="submit" disabled={isSubmitting} className={`hover-target ${styles.submitButton}`}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus === 'success' && <p className={styles.successMessage}>Message sent successfully!</p>}
            {submitStatus === 'error' && <p className={styles.errorMessage}>Failed to send message. Please try again later.</p>}
          </form>
        </div>
        
        <div className={styles.socialLinks}>
          <a href="#" className="hover-target">Instagram</a>
          <span className={styles.separator}>/</span>
          <a href="#" className="hover-target">WhatsApp</a>
          <span className={styles.separator}>/</span>
          <a href="mailto:hello@example.com" className="hover-target">Email</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
