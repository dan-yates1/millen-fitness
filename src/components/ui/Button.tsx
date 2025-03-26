import { ReactNode } from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  external?: boolean;
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) => {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors rounded-full';
  
  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-highlight text-foreground hover:bg-highlight/80',
    secondary: 'bg-accent text-background hover:bg-accent/80',
    outline: 'border border-accent text-foreground hover:bg-accent/10',
  };
  
  // Combine all styles
  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;
  
  // If href is provided, render as Link
  if (href) {
    const linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    
    return (
      <Link href={href} {...linkProps} className={buttonStyles}>
        {children}
      </Link>
    );
  }
  
  // Otherwise, render as button
  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonStyles}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
