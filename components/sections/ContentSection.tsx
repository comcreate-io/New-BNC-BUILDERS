// BNC Builders - Content Section Component

'use client';

import { Container, Section, AnimatedSection } from '@/components/ui';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { CheckCircle } from 'lucide-react';

interface ContentSectionProps {
  title?: string;
  subtitle?: string;
  content: string[];
  image?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  background?: 'white' | 'gray' | 'dark';
  showAccentBox?: boolean;
  accentText?: string;
  bulletPoints?: string[];
}

export function ContentSection({
  title,
  subtitle,
  content,
  image,
  imageAlt,
  imagePosition = 'right',
  background = 'white',
  showAccentBox = false,
  accentText = '30+ Years',
  bulletPoints,
}: ContentSectionProps) {
  const hasImage = image && imageAlt;
  const isDark = background === 'dark';

  return (
    <Section background={background} padding="lg">
      <Container>
        <div className={`grid gap-8 sm:gap-12 items-center ${hasImage ? 'lg:grid-cols-2' : ''}`}>
          {/* Content */}
          <AnimatedSection
            animation={imagePosition === 'left' ? 'fade-in-right' : 'fade-in-left'}
            className={imagePosition === 'left' && hasImage ? 'lg:order-2' : ''}
          >
            {subtitle && (
              <span className="text-gold font-semibold uppercase tracking-wider text-xs sm:text-sm">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 sm:mb-6 ${isDark ? 'text-white' : 'text-dark'}`}>
                {title}
              </h2>
            )}
            <div className="space-y-3 sm:space-y-4">
              {content.map((paragraph, index) => (
                <p key={index} className={`leading-relaxed text-sm sm:text-base ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Bullet points if provided */}
            {bulletPoints && bulletPoints.length > 0 && (
              <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className={`text-sm sm:text-base ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </AnimatedSection>

          {/* Image */}
          {hasImage && (
            <AnimatedSection
              animation={imagePosition === 'left' ? 'fade-in-left' : 'fade-in-right'}
              delay={200}
              className={`relative ${imagePosition === 'left' ? 'lg:order-1' : ''}`}
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl image-reveal hover-lift">
                <CloudinaryImage
                  publicId={image}
                  alt={imageAlt}
                  width={600}
                  height={450}
                  className="w-full h-auto transition-transform duration-700"
                />
              </div>

              {/* Accent box */}
              {showAccentBox && (
                <div className="absolute -bottom-6 -left-6 bg-gold p-5 rounded-xl shadow-lg hidden md:block animate-pulse-gold">
                  <div className="text-3xl font-bold text-white">{accentText.split(' ')[0]}</div>
                  <div className="text-white/80 text-sm">{accentText.split(' ').slice(1).join(' ')}</div>
                </div>
              )}

              {/* Decorative element */}
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full border-2 border-gold/30 rounded-xl hidden lg:block" />
            </AnimatedSection>
          )}
        </div>
      </Container>
    </Section>
  );
}
