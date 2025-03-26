import Link from 'next/link';
import MobileNav from './MobileNav';
import Logo from './ui/Logo';

const navLinks = [
  // { href: '/', label: 'Home' }, // Removed - Logo links home
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#programs', label: 'Programs' },
  // { href: '/#testimonials', label: 'Testimonials' }, // Removed - Less critical for main nav
  { href: '/#blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
];

const Header = () => {
  return (
    <header className="bg-background text-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6">
        <nav className="flex justify-between items-center">
          <Logo size='lg' withText={false} />
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Mobile Navigation */}
          <MobileNav links={navLinks} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
