// BNC Builders - Button Component

import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-bold uppercase tracking-wide transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 btn-animated hover:scale-[1.02] active:scale-[0.98]';

  const variantStyles = {
    primary: 'bg-gold text-white hover:bg-gold-light focus:ring-gold',
    secondary: 'bg-zinc-800 text-white hover:bg-zinc-700 focus:ring-zinc-800',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-white focus:ring-gold',
    white: 'bg-white text-zinc-900 hover:bg-zinc-100 focus:ring-white border border-zinc-200',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {children}
    </button>
  );
}
