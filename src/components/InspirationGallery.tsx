import React from 'react';
import { SectionTitle } from './SectionTitle';
import { RevealAnimation } from './RevealAnimation';

export const InspirationGallery: React.FC = () => {
  return (
    <section id="nuestro-estilo" className="px-6 md:px-12 py-20 bg-[#F8F2E8] relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <SectionTitle
          label="UN POQUITO DE HULE"
          title={
            <>
              Color, textura<br />
              y <span className="text-[#CB4178] italic">alegría</span>.
            </>
          }
          subtitle="Nos inspiramos en tu historia, en una canción, en ese mantel que te encanta. Las mejores ideas suelen empezar en una charla."
        />

        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 pt-8 items-start">
          
          {/* Card 1: Paletas con Carácter */}
          <RevealAnimation variant="fade-up" delay={0.1} className="w-full">
            <div className="bg-[#FFFDF8] border border-[#4B2032]/5 rounded-[2.5rem] p-8 h-[450px] lg:h-[500px] flex flex-col justify-between overflow-hidden shadow-[0_15px_30px_rgba(75,32,50,0.02)] relative group hover:-translate-y-1 transition-transform duration-500">
              
              {/* Image background with gradient overlay for editorial look */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem]">
                <img 
                  src="/balloon_palette.png" 
                  alt="Paletas con carácter" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF8] via-[#FFFDF8]/40 to-transparent opacity-95 group-hover:opacity-90 transition-opacity duration-500"></div>
              </div>

              {/* Text Layer */}
              <div className="relative z-10 text-left">
                <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-[#945B72] uppercase block mb-3">
                  01 / PALETAS CON CARÁCTER
                </span>
                <h4 className="font-serif text-3xl text-[#4B2032] font-semibold leading-tight max-w-[200px]">
                  Que se note que es tuyo.
                </h4>
              </div>
            </div>
          </RevealAnimation>

          {/* Card 2: Candy Bar */}
          <RevealAnimation variant="fade-up" delay={0.25} className="w-full lg:translate-y-[-30px]">
            <div className="bg-[#E8A27F] rounded-[2.5rem] p-8 h-[450px] lg:h-[530px] flex flex-col justify-between overflow-hidden shadow-[0_15px_30px_rgba(75,32,50,0.03)] relative group hover:-translate-y-1 lg:hover:translate-y-[-34px] transition-transform duration-500">
              
              {/* Image background with gradient overlay for editorial look */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem]">
                <img 
                  src="/candy_bar.png" 
                  alt="Candy Bar Hule" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#E8A27F] via-[#E8A27F]/40 to-transparent opacity-95 group-hover:opacity-90 transition-opacity duration-500"></div>
              </div>

              {/* Text Layer */}
              <div className="relative z-10 text-left">
                <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-[#4B2032] uppercase block mb-3 opacity-80">
                  02 / CANDY BAR
                </span>
                <h4 className="font-serif text-3xl text-[#4B2032] font-semibold leading-tight max-w-[200px]">
                  Dulces que dan ganas de sacarles foto.
                </h4>
              </div>
            </div>
          </RevealAnimation>

          {/* Card 3: Decoración */}
          <RevealAnimation variant="fade-up" delay={0.4} className="w-full lg:translate-y-8">
            <div className="bg-[#F5F0B8] rounded-[2.5rem] p-8 h-[450px] lg:h-[470px] flex flex-col justify-between overflow-hidden shadow-[0_15px_30px_rgba(75,32,50,0.03)] relative group hover:-translate-y-1 lg:hover:translate-y-6 transition-transform duration-500">
              
              {/* Image background with gradient overlay for editorial look */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem]">
                <img 
                  src="/birthday_decor.png" 
                  alt="Decoración Hule" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F5F0B8] via-[#F5F0B8]/40 to-transparent opacity-95 group-hover:opacity-90 transition-opacity duration-500"></div>
              </div>

              {/* Text Layer */}
              <div className="relative z-10 text-left">
                <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-[#4B2032] uppercase block mb-3 opacity-80">
                  03 / DECORACIÓN
                </span>
                <h4 className="font-serif text-3xl text-[#4B2032] font-semibold leading-tight max-w-[200px]">
                  Globos con una vuelta más.
                </h4>
              </div>
            </div>
          </RevealAnimation>

        </div>
      </div>
    </section>
  );
};
export default InspirationGallery;
