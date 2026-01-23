// BNC Builders - Feature List Component

'use client';

import { Container, Section, AnimatedSection } from '@/components/ui';
import { CheckCircle } from 'lucide-react';
import { useInView } from '@/lib/hooks/useInView';

interface FeatureListProps {
  title?: string;
  subtitle?: string;
  features: string[];
  columns?: 1 | 2 | 3;
  background?: 'white' | 'gray' | 'dark';
}

export function FeatureList({
  title,
  subtitle,
  features,
  columns = 2,
  background = 'white',
}: FeatureListProps) {
  const columnClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  const isDark = background === 'dark';
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <Section background={background} padding="lg">
      <Container>
        {(title || subtitle) && (
          <AnimatedSection animation="fade-in-up" className="text-center mb-8 sm:mb-12">
            {title && (
              <>
                <span className="text-gold font-semibold uppercase tracking-wider text-xs sm:text-sm">
                  What We Offer
                </span>
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 ${isDark ? 'text-white' : 'text-dark'}`}>
                  {title}
                </h2>
              </>
            )}
            {subtitle && (
              <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                {subtitle}
              </p>
            )}
          </AnimatedSection>
        )}

        <div ref={ref} className={`grid gap-3 sm:gap-4 ${columnClass[columns]}`}>
          {features.map((feature, index) => (
            <div
              key={feature}
              className={`flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl transition-all duration-300 card-animate hover-lift ${inView ? 'in-view' : ''} ${
                isDark
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/30'
                  : 'bg-white hover:shadow-lg border border-gray-100 hover:border-gold/30'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 ${
                isDark ? 'bg-gold/20' : 'bg-gold/10'
              }`}>
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
              </div>
              <span className={`text-sm sm:text-base leading-relaxed pt-1 sm:pt-2 ${isDark ? 'text-zinc-200' : 'text-zinc-700'}`}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
