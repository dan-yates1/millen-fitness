 "use client"; // Still needs to be client for MobileNav potentially

 import Link from 'next/link';
 // Removed unused next-auth imports: useSession, signIn, signOut
 import MobileNav from './MobileNav';
 import Logo from './ui/Logo';
 // Removed unused Button import

 const navLinks = [
   // { href: '/', label: 'Home' }, // Removed - Logo links home
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#programs', label: 'Programs' },
  // { href: '/#testimonials', label: 'Testimonials' }, // Removed - Less critical for main nav
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
 ];

 const Header = () => {
   // Removed unused useSession hook call

   return (
     <header className="bg-background text-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6">
        <nav className="flex justify-between items-center h-16"> {/* Added fixed height */}
          <Logo size='lg' withText={false} />
          {/* Desktop Navigation & Auth Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
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
            {/* Removed Auth Buttons - Desktop */}
          </div>

          {/* Mobile Navigation */}
          <MobileNav links={navLinks} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
