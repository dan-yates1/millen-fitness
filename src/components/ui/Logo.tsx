import Link from 'next/link';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
};

const Logo = ({ size = 'md', withText = true }: LogoProps) => {
  // Size mapping
  const sizeMap = {
    sm: {
      container: 'w-8 h-8',
      text: 'text-lg',
    },
    md: {
      container: 'w-10 h-10',
      text: 'text-xl',
    },
    lg: {
      container: 'w-16 h-16',
      text: 'text-3xl',
    },
  };

  return (
    <Link href="/" className="flex items-center align-middle">
      {/* Diamond shape with MF text */}
      <div className={`${sizeMap[size].container} flex items-center justify-center rounded-full`}>
        <img src='/logo.svg' width={300} height={300} />
      </div>
      
      {/* Optional text */}
      {withText && (
        <span className={`ml-2 font-bold ${sizeMap[size].text}`}>
          <span>Millen</span> Fitness
        </span>
      )}
    </Link>
  );
};

export default Logo;
