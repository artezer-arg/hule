import { motion } from 'framer-motion';
import { RevealAnimation } from './RevealAnimation';

export const Manifesto: React.FC = () => {
  const lines = [
    'No decoramos',
    'eventos.',
    'Creamos',
    'ESCENAS',
    'para recordar.',
  ];

  // Sequence containers for staggered line reveals
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as any,
      },
    },
  };

  return (
    <section 
      id="nuestro-estilo" 
      className="relative min-h-[85vh] flex flex-col justify-center items-center px-6 md:px-12 py-24 bg-[#DA90AE] text-[#4B2032] overflow-hidden z-20 paper-grain"
    >
      {/* Background soft glowing circles for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FFFDF8] opacity-[0.08] filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl w-full flex flex-col items-center text-center relative z-10">
        
        {/* Spinning Circular Text Badge */}
        <RevealAnimation variant="scale-up" delay={0.1} className="mb-10 flex items-center justify-center">
          <div className="relative w-36 h-36 flex items-center justify-center">
            {/* Fine line border */}
            <div className="absolute w-28 h-28 rounded-full border border-[#4B2032]/20"></div>
            
            {/* SVG Circular text */}
            <svg viewBox="0 0 100 100" className="w-36 h-36 animate-spin-slow pointer-events-none">
              <defs>
                <path
                  id="circleTextPath"
                  d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                  fill="none"
                />
              </defs>
              <text className="font-mono text-[5.8px] font-bold fill-[#4B2032] tracking-[0.16em] uppercase">
                <textPath href="#circleTextPath">
                  DETALLES QUE DICEN MUCHO SIN DECIR UNA PALABRA • 
                </textPath>
              </text>
            </svg>
          </div>
        </RevealAnimation>

        {/* Large Statement Title */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center leading-none"
        >
          {lines.map((line, idx) => {
            const isHighlight = line === 'ESCENAS';
            return (
              <div key={idx} className="overflow-hidden py-1 mb-1 sm:mb-2">
                <motion.span
                  variants={lineVariants}
                  className={`inline-block font-serif-tight text-[2.5rem] xs:text-[3.2rem] sm:text-[4.8rem] md:text-[6rem] lg:text-[7rem] tracking-tight ${
                    isHighlight ? 'text-[#F5F0B8] italic relative inline-block' : 'text-[#4B2032]'
                  }`}
                >
                  {line}
                  {isHighlight && (
                    <svg className="absolute left-0 bottom-[-4px] md:bottom-[-8px] w-full h-[6px] md:h-[10px]" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0,7 C30,3 70,3 100,7" stroke="#F5F0B8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    </svg>
                  )}
                </motion.span>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
export default Manifesto;
