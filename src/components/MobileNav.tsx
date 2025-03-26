"use client";

import { useState } from 'react';
import Link from 'next/link';

type MobileNavProps = {
  links: Array<{
    href: string;
    label: string;
  }>;
};

const MobileNav = ({ links }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <span
          className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-accent/20 shadow-lg z-50">
          <nav className="container mx-auto px-6 py-4">
            <ul className="flex flex-col space-y-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
