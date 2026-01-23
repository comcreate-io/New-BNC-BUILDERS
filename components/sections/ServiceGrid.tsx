// BNC Builders - Service Grid Component

'use client';

import Link from 'next/link';
import { Container, Section, AnimatedSection } from '@/components/ui';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { Service } from '@/lib/types';
import { useInView } from '@/lib/hooks/useInView';

interface ServiceGridProps {
  title?: string;
  subtitle?: string;
  services: Service[];
  columns?: 2 | 3 | 4;
}

export function ServiceGrid({
  title,
  subtitle,
  services,
  columns = 3,
}: ServiceGridProps) {
  const columnClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <Section background="gray">
      <Container>
        {(title || subtitle) && (
          <AnimatedSection animation="fade-in-up" className="text-center mb-8 sm:mb-12">
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </AnimatedSection>
        )}

        <div ref={ref} className={`grid gap-6 ${columnClass[columns]}`}>
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} inView={inView} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

interface ServiceCardProps {
  service: Service;
  index: number;
  inView: boolean;
}

function ServiceCard({ service, index, inView }: ServiceCardProps) {
  return (
    <Link
      href={`/${service.slug}`}
      className={`group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 hover-lift card-animate ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-40 sm:h-48 image-reveal">
        <CloudinaryImage
          publicId={service.cardImage}
          alt={service.shortTitle}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
        <h3 className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-lg sm:text-xl font-bold text-white drop-shadow-lg">
          {service.shortTitle}
        </h3>
      </div>
      <div className="p-3 sm:p-4">
        <p className="text-zinc-600 text-xs sm:text-sm line-clamp-2">
          {service.description}
        </p>
        <span className="inline-flex items-center gap-1 text-gold font-medium mt-2 sm:mt-3 text-xs sm:text-sm group-hover:gap-2 transition-all link-underline">
          Learn More
          <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
