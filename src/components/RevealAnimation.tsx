import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { UseInViewOptions } from 'framer-motion';

interface RevealAnimationProps {
  children: React.ReactNode;
  variant?: 'fade-up' | 'fade-down' | 'fade-in' | 'scale-up' | 'slide-left' | 'slide-right' | 'stagger-container';
  delay?: number;
  duration?: number;
  threshold?: UseInViewOptions['amount'];
  className?: string;
}

export const RevealAnimation: React.FC<RevealAnimationProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.8,
  threshold = 0.15,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  // Trigger animation once when it enters the viewport
  const isInView = useInView(ref, { once: true, amount: threshold });

  const variants = {
    'fade-up': {
      hidden: { opacity: 0, y: 35 },
      visible: { opacity: 1, y: 0 },
    },
    'fade-down': {
      hidden: { opacity: 0, y: -35 },
      visible: { opacity: 1, y: 0 },
    },
    'fade-in': {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    'scale-up': {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    },
    'slide-left': {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    'slide-right': {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    'stagger-container': {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
        },
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1] as any, // premium cubic-bezier ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as any,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};
