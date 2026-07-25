import React from 'react';
import { SectionTitle } from './SectionTitle';
import { RevealAnimation } from './RevealAnimation';

interface Step {
  num: string;
  title: string;
  desc: string;
}

const stepsData: Step[] = [
  {
    num: '01',
    title: 'Me contás',
    desc: 'Qué celebrás, dónde y qué te imaginás. No hace falta tener todo resuelto.',
  },
  {
    num: '02',
    title: 'Lo diseñamos',
    desc: 'Te enviamos una propuesta pensada para tu espacio, tu paleta y tu presupuesto.',
  },
  {
    num: '03',
    title: 'Lo hacemos realidad',
    desc: 'Llegamos, instalamos y dejamos todo listo para que la escena empiece.',
  },
];

export const Process: React.FC = () => {
  return (
    <section id="como-trabajamos" className="px-6 md:px-12 py-20 bg-[#F8F2E8] relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <SectionTitle
          label="SIN COMPLICACIONES"
          title={
            <>
              Del mensaje<br />
              al <span className="text-[#CB4178] italic">momento</span>.
            </>
          }
          subtitle="Trabajamos cerca y con mucha conversación. Porque el resultado empieza mucho antes del primer globo."
        />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-[#4B2032]/10 mt-12">
          {stepsData.map((step, index) => {
            // Determine border styles for responsive divides
            // In mobile: bottom border for step 1 & 2
            // In desktop: right border for step 1 & 2
            const borderClass = index < 2 
              ? 'border-b lg:border-b-0 lg:border-r border-[#4B2032]/10' 
              : '';

            return (
              <RevealAnimation
                key={index}
                variant="fade-up"
                delay={index * 0.15}
                className={`py-10 lg:py-14 lg:px-8 first:pl-0 last:pr-0 ${borderClass}`}
              >
                <div className="flex flex-col text-left">
                  {/* Step Number in Monospace */}
                  <span className="font-mono text-xs font-bold text-[#CB4178] tracking-widest uppercase mb-4 block">
                    PASO {step.num}
                  </span>
                  
                  {/* Step Title in Serif */}
                  <h3 className="font-serif text-2xl md:text-3xl text-[#4B2032] font-semibold mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  
                  {/* Step Description */}
                  <p className="font-sans text-sm md:text-base text-[#945B72] leading-relaxed max-w-sm">
                    {step.desc}
                  </p>
                </div>
              </RevealAnimation>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default Process;
