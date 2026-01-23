// BNC Builders - Section Component

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'dark';
  padding?: 'sm' | 'md' | 'lg';
  id?: string;
}

export function Section({
  children,
  className = '',
  background = 'white',
  padding = 'lg',
  id,
}: SectionProps) {
  const backgroundStyles = {
    white: 'bg-white',
    gray: 'bg-gray',
    dark: 'bg-dark text-white dark-section',
  };

  const paddingStyles = {
    sm: 'py-6 sm:py-8 md:py-12',
    md: 'py-8 sm:py-12 md:py-16',
    lg: 'py-12 sm:py-16 md:py-24',
  };

  return (
    <section
      id={id}
      className={`${backgroundStyles[background]} ${paddingStyles[padding]} ${className}`}
    >
      {children}
    </section>
  );
}
