import React from 'react';
import Link from 'next/link';
import { ArrowRight, Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'on-dark' | 'outline-white';
  href?: string;
  icon?: boolean | React.ReactNode;
  loading?: boolean;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  href,
  icon = false,
  loading = false,
  external = false,
  className = '',
  disabled,
  children,
  ...props
}: ButtonProps) {
  // Base classes according to Spec 01 (Mục 3.6)
  // Height 44px (desktop), 48px (mobile), px 20px, font 14/600, rounded 4px
  const baseClasses = 
    "inline-flex items-center justify-center font-sans font-semibold text-sm h-11 md:h-11 min-h-[44px] px-5 rounded transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--theme-primary)] group select-none";

  let variantClasses = "";
  switch (variant) {
    case 'primary':
      variantClasses = "bg-[var(--theme-btn-primary)] text-white hover:bg-[var(--theme-btn-hover)] active:scale-[0.99] shadow-sm";
      break;
    case 'secondary':
      variantClasses = "border border-[var(--theme-primary)] text-[var(--theme-primary)] bg-transparent hover:bg-[var(--theme-bg-tint)]";
      break;
    case 'on-dark':
      variantClasses = "bg-[var(--theme-btn-primary)] text-white hover:brightness-110 active:scale-[0.99] shadow-sm";
      break;
    case 'outline-white':
      variantClasses = "border border-white/20 text-white hover:bg-white/10 hover:border-white/40";
      break;
  }

  const disabledClasses = disabled || loading ? "opacity-40 cursor-not-allowed pointer-events-none" : "cursor-pointer";
  const combinedClasses = `${baseClasses} ${variantClasses} ${disabledClasses} ${className}`;

  const renderIcon = () => {
    if (loading) {
      return <Loader2 className="w-4 h-4 ml-2 animate-spin" />;
    }
    if (icon === true) {
      return <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />;
    }
    if (React.isValidElement(icon)) {
      return <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">{icon}</span>;
    }
    return null;
  };

  if (href) {
    if (external) {
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={combinedClasses}
        >
          <span>{children}</span>
          {renderIcon()}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        <span>{children}</span>
        {renderIcon()}
      </Link>
    );
  }

  return (
    <button 
      disabled={disabled || loading} 
      className={combinedClasses} 
      {...props}
    >
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
}
