import { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
};

const Section = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  dark = false,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`py-16 ${dark ? 'bg-highlight/10' : ''} ${className}`}
    >
      <div className="container mx-auto px-6">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            )}
            {subtitle && (
              <p className="text-lg text-accent max-w-2xl mx-auto">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
