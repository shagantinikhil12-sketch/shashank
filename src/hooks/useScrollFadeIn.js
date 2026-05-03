import { useEffect, useRef, useState } from 'react';

export const useScrollFadeIn = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: unobserve after fading in if we only want it to happen once
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      });
    }, { threshold: 0.1, ...options });
    
    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return {
    ref: domRef,
    className: `fade-in-section ${isVisible ? 'is-visible' : ''}`
  };
};
