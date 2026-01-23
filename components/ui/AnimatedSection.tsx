// BNC Builders - Animated Section Component

'use client';

import { useInView } from '@/lib/hooks/useInView';

type AnimationType =
  | 'fade-in'
  | 'fade-in-up'
  | 'fade-in-down'
  | 'fade-in-left'
  | 'fade-in-right'
  | 'scale-in';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  as?: 'div' | 'section' | 'article' | 'aside' | 'main' | 'header' | 'footer' | 'nav' | 'span';
  staggerChildren?: boolean;
}

export function AnimatedSection({
  children,
  animation = 'fade-in-up',
  delay = 0,
  duration = 600,
  className = '',
  threshold = 0.1,
  staggerChildren = false,
}: AnimatedSectionProps) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold, triggerOnce: true });

  const animationClass = `animate-${animation}`;
  const staggerClass = staggerChildren ? 'stagger-children' : '';

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${animationClass} ${staggerClass} ${inView ? 'in-view' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Convenience wrapper for animating individual items in a list
interface AnimatedItemProps {
  children: React.ReactNode;
  index?: number;
  baseDelay?: number;
  className?: string;
}

export function AnimatedItem({
  children,
  index = 0,
  baseDelay = 100,
  className = '',
}: AnimatedItemProps) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`animate-on-scroll animate-fade-in-up ${inView ? 'in-view' : ''} ${className}`}
      style={{
        transitionDelay: `${index * baseDelay}ms`,
      }}
    >
      {children}
    </div>
  );
}
