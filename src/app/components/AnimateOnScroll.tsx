"use client"

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
  duration?: number;
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom';
}

export default function AnimateOnScroll({
  children,
  threshold = 0.1,
  delay = 0,
  duration = 0.5,
  animation = 'fade'
}: AnimateOnScrollProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          controls.start('visible');
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls, isVisible, threshold]);

  const getVariants = () => {
    switch (animation) {
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, delay } }
        };
      case 'slide-up':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration, delay } }
        };
      case 'slide-left':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0, transition: { duration, delay } }
        };
      case 'slide-right':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration, delay } }
        };
      case 'zoom':
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1, transition: { duration, delay } }
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, delay } }
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
}