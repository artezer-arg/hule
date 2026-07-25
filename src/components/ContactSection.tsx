import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { ContactForm } from './ContactForm';
import { RevealAnimation } from './RevealAnimation';

export const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="px-6 md:px-12 py-20 bg-[#F8F2E8] relative z-20 pb-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Text & Instagram Direct Link */}
          <div className="lg:col-span-5 text-left">
            <SectionTitle
              label="HAGAMOS ALGO LINDO"
              title={
                <>
                  Tu idea merece<br />
                  un <span className="text-[#CB4178] italic">sí</span>.
                </>
              }
              subtitle="Completá estos datos y te escribimos para darle forma. Las consultas son sin compromiso y nos encanta leer ideas nuevas."
              className="mb-8"
            />

            {/* Direct Char Callout Card */}
            <RevealAnimation variant="fade-up" delay={0.35}>
              <div className="bg-[#FFFDF8] border border-[#4B2032]/5 rounded-3xl p-6 shadow-[0_10px_25px_rgba(75,32,50,0.02)] flex gap-4 items-start max-w-md">
                <div className="w-10 h-10 rounded-2xl bg-[#CB4178]/5 border border-[#CB4178]/10 flex items-center justify-center text-[#CB4178] shrink-0 mt-1">
                  <MessageCircle className="w-5 h-5 stroke-[1.5]" />
                </div>
                
                <div className="flex flex-col">
                  <h4 className="font-serif text-lg font-semibold text-[#4B2032] mb-1">
                    ¿Una charla directa?
                  </h4>
                  <p className="font-sans text-xs md:text-sm text-[#945B72] leading-relaxed mb-3">
                    Si preferís una charla más directa, también podés encontrarnos en Instagram.
                  </p>
                  <a
                    href="https://instagram.com/hule.studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[10px] tracking-wider uppercase font-bold text-[#CB4178] hover:text-[#4B2032] transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                    <span>Ir a @hule.studio</span>
                  </a>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <RevealAnimation variant="fade-up" delay={0.2}>
              <ContactForm />
            </RevealAnimation>
          </div>

        </div>
      </div>
    </section>
  );
};
export default ContactSection;
