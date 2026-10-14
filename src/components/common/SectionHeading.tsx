import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string;
  action?: React.ReactNode;
  dark?: boolean;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  dark = false,
  centered = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`w-full mb-10 md:mb-14 ${centered ? 'text-center' : ''} ${className}`}>
      <div className={`flex flex-col ${action && !centered ? 'md:flex-row md:items-end md:justify-between gap-6' : ''}`}>
        <div className={`max-w-4xl lg:max-w-none ${centered ? 'mx-auto' : ''}`}>
          {eyebrow && (
            <p 
              className={`uppercase tracking-[0.3em] text-xs md:text-sm font-bold mb-3 font-sans ${
                dark ? 'text-fnx-gold-300' : 'text-fnx-navy'
              }`}
            >
              {eyebrow}
            </p>
          )}

          <h2 
            className={`text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight lg:whitespace-nowrap ${
              dark ? 'text-white' : 'text-fnx-dark'
            }`}
          >
            {title}
          </h2>

          {description && (
            <p 
              className={`mt-4 text-base md:text-lg leading-relaxed ${
                dark ? 'text-fnx-silver' : 'text-[#4A5568]'
              }`}
            >
              {description}
            </p>
          )}
        </div>

        {action && (
          <div className={`mt-6 md:mt-0 flex-shrink-0 ${centered ? 'flex justify-center' : ''}`}>
            {action}
          </div>
        )}
      </div>
    </div>
  );
}
