import React from 'react';
import { RevealAnimation } from './RevealAnimation';

interface SectionTitleProps {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
  theme?: 'dark' | 'light';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  label,
  title,
  subtitle,
  className = '',
  theme = 'light',
}) => {
  return (
    <div className={`flex flex-col mb-8 md:mb-12 ${className}`}>
      <RevealAnimation variant="fade-up" delay={0.1}>
        <p className={`font-mono-tag mb-3 md:mb-4 tracking-[0.2em] uppercase font-bold text-xs ${
          theme === 'dark' ? 'text-yellowPastel/85' : 'text-plum/80'
        }`}>
          — {label}
        </p>
      </RevealAnimation>
      
      <RevealAnimation variant="fade-up" delay={0.2}>
        <h2 className={`font-serif-tight text-[2.5rem] md:text-[3.5rem] leading-[1.05] tracking-tight max-w-2xl ${
          theme === 'dark' ? 'text-cream-light' : 'text-darkBordeaux'
        }`}>
          {title}
        </h2>
      </RevealAnimation>
      
      {subtitle && (
        <RevealAnimation variant="fade-up" delay={0.3}>
          <p className={`mt-4 text-base md:text-lg max-w-xl leading-relaxed font-sans ${
            theme === 'dark' ? 'text-cream/90' : 'text-plum/90'
          }`}>
            {subtitle}
          </p>
        </RevealAnimation>
      )}
    </div>
  );
};
export default SectionTitle;
