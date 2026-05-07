'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          North<span>Bridge</span>
        </Link>
        <div className="nav-links">
          <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
          <Link href="/services" className={pathname === '/services' ? 'active' : ''}>Services</Link>
          <Link href="/contact" className={`nav-cta-btn ${pathname === '/contact' ? 'active' : ''}`}>
            Get in Touch
          </Link>
        </div>
        <button
          className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
          aria-label="Menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
      <div className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
        <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
        <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About Us</Link>
        <Link href="/services" className={pathname === '/services' ? 'active' : ''}>Services</Link>
        <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
      </div>
    </nav>
  );
}
