'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''} aria-label="Main navigation">

      {/* ── Floating pill ─────────────────────────── */}
      <div className="nav-pill">

        {/* Logo */}
        <Link href="/" className="nav-logo" aria-label="NorthBridge home">
          North<span>Bridge</span>
        </Link>

        {/* Desktop links */}
        <div className="nav-links" role="list">
          <Link href="/"        className={pathname === '/'        ? 'active' : ''} role="listitem">Home</Link>
          <Link href="/about"   className={pathname === '/about'   ? 'active' : ''} role="listitem">About</Link>
          <Link href="/services" className={pathname === '/services' ? 'active' : ''} role="listitem">Services</Link>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className={`nav-cta ${pathname === '/contact' ? 'active' : ''}`}
        >
          Get in Touch
        </Link>

        {/* Hamburger — mobile only */}
        <button
          className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* ── Mobile dropdown ───────────────────────── */}
      <div className={`nav-dropdown ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <Link href="/"         className={pathname === '/'        ? 'active' : ''}>Home</Link>
        <Link href="/about"    className={pathname === '/about'   ? 'active' : ''}>About Us</Link>
        <Link href="/services" className={pathname === '/services' ? 'active' : ''}>Services</Link>
        <Link href="/contact"  className={`nav-dropdown-cta ${pathname === '/contact' ? 'active' : ''}`}>Get in Touch</Link>
      </div>

    </nav>
  );
}
