import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nuestro estilo', href: '#nuestro-estilo' },
  { label: 'Cómo trabajamos', href: '#como-trabajamos' },
  { label: 'Contacto', href: '#contacto' },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween' as any,
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as any,
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      y: '-100%',
      transition: {
        type: 'tween' as any,
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1] as any,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as any },
    },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex flex-col bg-[#F8F2E8] paper-grain p-8 overflow-y-auto"
        >
          {/* Header row inside Mobile Menu */}
          <div className="flex items-center justify-between h-20">
            <a href="#inicio" onClick={onClose} className="flex items-center gap-3">
              {/* Logo circular */}
              <div className="w-10 h-10 rounded-full border border-[#DA90AE]/40 overflow-hidden shadow-sm">
                <img src="/logo.jpg" alt="Hule Logo" className="w-full h-full object-cover scale-[1.05]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-xl leading-none text-[#4B2032] font-bold tracking-tight">hule</span>
                <span className="font-mono text-[8px] tracking-[0.18em] text-[#945B72] uppercase font-bold">Studio</span>
              </div>
            </a>
            
            <button
              onClick={onClose}
              aria-label="Cerrar menú"
              className="w-12 h-12 rounded-full border border-[#4B2032]/10 flex items-center justify-center text-[#4B2032] hover:bg-[#4B2032]/5 transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center my-8 pl-4">
            <nav className="flex flex-col gap-6 md:gap-8">
              {menuItems.map((item) => (
                <motion.div key={item.label} variants={itemVariants}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="font-serif text-[2.5rem] md:text-[3.5rem] text-[#4B2032] hover:text-[#CB4178] transition-colors leading-tight font-medium"
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
              
              <motion.div variants={itemVariants} className="pt-6 border-t border-[#4B2032]/10 max-w-xs">
                <a
                  href="https://instagram.com/hule.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="inline-flex items-center gap-3 font-mono text-xs tracking-widest text-[#4B2032] hover:text-[#CB4178] transition-colors uppercase font-bold"
                >
                  <svg className="w-5 h-5 text-[#CB4178]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </motion.div>
            </nav>
          </div>

          {/* Footer inside Mobile Menu */}
          <div className="mt-auto text-left pl-4 text-[10px] font-mono text-[#945B72]/70 tracking-widest">
            <p>CAMPANA · BUENOS AIRES</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default MobileMenu;
