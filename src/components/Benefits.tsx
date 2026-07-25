import React from 'react';
import { Heart, Palette, Clock, MapPin } from 'lucide-react';
import { RevealAnimation } from './RevealAnimation';

interface BenefitItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

const benefitsData: BenefitItem[] = [
  {
    icon: Heart,
    title: 'Diseño con intención',
    desc: 'Cada detalle tiene un porqué.',
  },
  {
    icon: Palette,
    title: 'Paletas a medida',
    desc: 'Tu celebración, tus colores.',
  },
  {
    icon: Clock,
    title: 'Respuesta en 24 h',
    desc: 'Hablemos sin vueltas.',
  },
  {
    icon: MapPin,
    title: 'Campana y alrededores',
    desc: 'Llegamos donde sucede.',
  },
];

export const Benefits: React.FC = () => {
  return (
    <section className="px-6 md:px-12 py-10 bg-[#F8F2E8] relative z-20">
      <div className="max-w-7xl mx-auto">
        <RevealAnimation variant="fade-up" delay={0.1}>
          <div className="bg-[#FFFDF8] border border-[#4B2032]/5 rounded-[2.5rem] p-8 md:p-12 shadow-[0_15px_40px_rgba(75,32,50,0.04)]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {benefitsData.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-2xl bg-[#CB4178]/5 border border-[#CB4178]/10 flex items-center justify-center mb-4 text-[#CB4178] group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    {/* Content */}
                    <h3 className="font-serif text-lg md:text-xl text-[#4B2032] font-semibold mb-1">
                      {benefit.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-[#945B72]">
                      {benefit.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};
export default Benefits;
