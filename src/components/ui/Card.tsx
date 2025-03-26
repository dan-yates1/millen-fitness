import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type CardProps = {
  title: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  href?: string;
  footer?: ReactNode;
  className?: string;
};

const Card = ({
  title,
  description,
  image,
  href,
  footer,
  className = '',
}: CardProps) => {
  const cardContent = (
    <>
      {image && (
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {description && <p className="text-accent mb-4">{description}</p>}
        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </>
  );

  const cardClasses = `bg-background border border-accent/20 rounded-lg shadow-sm hover:shadow-md transition-shadow ${className}`;

  if (href) {
    return (
      <Link href={href} className={cardClasses}>
        {cardContent}
      </Link>
    );
  }

  return <div className={cardClasses}>{cardContent}</div>;
};

export default Card;
