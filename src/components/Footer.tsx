import Link from 'next/link';
import { InstagramIcon, EmailIcon } from './ui/Icon';
import Container from './ui/Container';
import Logo from './ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground border-t border-accent/20 mt-16 py-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Logo />
            </div>
            <p>&copy; {currentYear} Millen Fitness. All rights reserved.</p>
            <p className="text-sm text-accent mt-1">Online Transformation Coach</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link 
                href="https://www.instagram.com/millenfitness/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Millen Fitness Instagram" 
                className="hover:text-accent transition-colors"
              >
                <InstagramIcon size={28} />
              </Link>
              <Link 
                href="mailto:contact@millenfitness.com" 
                aria-label="Email Millen Fitness" 
                className="hover:text-accent transition-colors"
              >
                <EmailIcon size={28} />
              </Link>
            </div>
            <p className="text-sm">
              <Link href="/#contact" className="hover:text-accent transition-colors">
                Contact Me
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
