'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface CursorPos { left: number; width: number; opacity: number }

const NAV_LINKS = [
  { href: '/',         label: 'Home'     },
  { href: '/about',    label: 'About'    },
  { href: '/services', label: 'Services' },
] as const;

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [cursor,    setCursor]    = useState<CursorPos>({ left: 0, width: 0, opacity: 0 });
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
        <Link href="/" className="nav-logo" aria-label="Northbridge home">
          North<span>bridge</span>
        </Link>

        {/* Sliding tab links — nav-header pattern */}
        <ul
          className="nav-links"
          role="list"
          onMouseLeave={() => setCursor(p => ({ ...p, opacity: 0 }))}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <NavTab
              key={href}
              href={href}
              active={pathname === href}
              setPosition={setCursor}
            >
              {label}
            </NavTab>
          ))}

          {/* Framer Motion sliding pill — the nav-header magic */}
          <motion.li
            aria-hidden="true"
            className="nav-cursor"
            animate={{ left: cursor.left, width: cursor.width, opacity: cursor.opacity }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        </ul>

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
        <Link href="/"         className={pathname === '/'         ? 'active' : ''}>Home</Link>
        <Link href="/about"    className={pathname === '/about'    ? 'active' : ''}>About Us</Link>
        <Link href="/services" className={pathname === '/services' ? 'active' : ''}>Services</Link>
        <Link href="/contact"  className={`nav-dropdown-cta ${pathname === '/contact' ? 'active' : ''}`}>Get in Touch</Link>
      </div>

    </nav>
  );
}

/* ── NavTab ─────────────────────────────────────────────────
   Measures its own bounding box on hover and reports it to the
   parent so the shared cursor can slide into position.          */
function NavTab({
  href,
  active,
  setPosition,
  children,
}: {
  href: string;
  active: boolean;
  setPosition: (pos: CursorPos) => void;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      role="listitem"
      onMouseEnter={() => {
        if (!ref.current) return;
        setPosition({
          left:    ref.current.offsetLeft,
          width:   ref.current.offsetWidth,
          opacity: 1,
        });
      }}
    >
      <Link href={href} className={active ? 'active' : ''}>
        {children}
      </Link>
    </li>
  );
}
