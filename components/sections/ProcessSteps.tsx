// BNC Builders - Process Steps Component

'use client';

import { Container, Section, AnimatedSection } from '@/components/ui';
import { ProcessStep } from '@/lib/types';
import { useInView } from '@/lib/hooks/useInView';

interface ProcessStepsProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
  background?: 'white' | 'gray' | 'dark';
}

export function ProcessSteps({
  title = 'Our Process',
  subtitle,
  steps,
  background = 'gray',
}: ProcessStepsProps) {
  const isDark = background === 'dark';

  const [desktopRef, desktopInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [mobileRef, mobileInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <Section background={background} padding="lg">
      <Container>
        <AnimatedSection animation="fade-in-up" className="text-center mb-10 sm:mb-16">
          <span className="text-gold font-semibold uppercase tracking-wider text-xs sm:text-sm">
            How We Work
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 ${isDark ? 'text-white' : 'text-dark'}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
              {subtitle}
            </p>
          )}
        </AnimatedSection>

        {/* Desktop Layout */}
        <div ref={desktopRef} className="hidden md:block relative">
          {/* Connecting Line with animation */}
          <div
            className={`absolute top-[60px] left-0 right-0 h-1 bg-gradient-to-r from-gold/20 via-gold to-gold/20 transition-all duration-1000 ${desktopInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
            style={{ transformOrigin: 'left' }}
          />

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative card-animate ${desktopInView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover-lift ${
                  isDark ? 'bg-white/5 border border-white/10 hover:border-gold/30' : 'bg-white border border-gray-100 shadow-md hover:border-gold/30'
                }`}>
                  {/* Step number circle */}
                  <div className="relative z-10 -mt-16 mb-6">
                    <div className="w-20 h-20 bg-gold rounded-2xl flex items-center justify-center mx-auto shadow-lg transform rotate-3 hover:rotate-0 hover:scale-110 transition-all duration-300">
                      <span className="text-3xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <h3 className={`text-xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-dark'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-center leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div ref={mobileRef} className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex gap-4 card-animate ${mobileInView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center shadow-md flex-shrink-0 hover:scale-110 transition-transform">
                  <span className="text-xl font-bold text-white">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-gold/30 mt-2" />
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 pb-6 ${index < steps.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <h3 className={`text-base sm:text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-dark'}`}>
                  {step.title}
                </h3>
                <p className={`leading-relaxed text-sm sm:text-base ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
