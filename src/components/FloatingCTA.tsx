import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      
      // Show CTA after scroll surpasses 400px
      // Hide CTA when approaching the contact form / footer area (e.g. last 800px of page)
      const nearBottom = scrollY + winHeight > docHeight - 750;
      
      if (scrollY > 400 && !nearBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as any }}
          className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-6 md:px-0 md:pb-8 flex justify-center pointer-events-none"
        >
          {/* Mobile Layout (Full Capsule) */}
          <div className="w-full max-w-md md:hidden pointer-events-auto shadow-[0_12px_24px_-4px_rgba(75,32,50,0.15)] rounded-full bg-[#4B2032] p-2 flex items-center justify-between">
            <span className="font-serif text-sm font-semibold text-[#FFFDF8] pl-5">
              ¿Celebramos?
            </span>
            <a
              href="#contacto"
              onClick={handleClick}
              className="px-5 py-3 bg-[#F8F2E8] hover:bg-[#FFFDF8] text-[#4B2032] font-mono text-[10px] tracking-wider uppercase font-bold rounded-full transition-all duration-300 transform active:scale-95 shadow-sm"
            >
              Pedir presupuesto →
            </a>
          </div>

          {/* Desktop Layout (Corner Capsule) */}
          <div className="hidden md:block pointer-events-auto fixed bottom-8 right-8 shadow-[0_12px_24px_-4px_rgba(75,32,50,0.15)] rounded-full bg-[#4B2032] p-1.5 flex items-center">
            <a
              href="#contacto"
              onClick={handleClick}
              className="px-5 py-3 bg-[#F8F2E8] hover:bg-[#FFFDF8] text-[#4B2032] font-mono text-xs tracking-wider uppercase font-bold rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm flex items-center gap-2 group"
            >
              <span>Pedir presupuesto</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default FloatingCTA;
