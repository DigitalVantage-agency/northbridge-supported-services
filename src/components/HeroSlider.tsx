'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    src: '/images/minh-pham-OtXADkUh3-I-unsplash.jpg',
    alt: 'Elegant supported living interior',
    eyebrow: 'Supported Living · Leeds',
    headline: <>Where <em>Independence</em><br />Begins</>,
    body: 'Professional housing-related support designed to build genuine capability — not reliance.',
  },
  {
    src: '/images/patrick-perkins-3wylDrjxH-E-unsplash.jpg',
    alt: 'Bright, welcoming flat interior',
    eyebrow: 'Professional Coaching',
    headline: <>Built on<br /><em>Respect</em></>,
    body: 'Our Independent Living Coaches work alongside residents — not for them — building real skills that last.',
  },
  {
    src: '/images/vitaly-gariev-Bm-BKF-JiDU-unsplash.jpg',
    alt: 'Resident at home, joyful',
    eyebrow: 'Professionalism · Dignity',
    headline: <>A <em>Home</em><br />to Flourish In</>,
    body: 'High-end supported living environments where every resident feels valued, heard, and in control.',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => goTo(current + 1), 5500);
    return () => clearInterval(id);
  }, [current, goTo]);

  return (
    <section className="hero">
      {slides.map((slide, i) => (
        <div key={i} className={`hero-slide ${i === current ? 'active' : ''}`}>
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            priority={i === 0}
          />
          <div className="hero-overlay" />
        </div>
      ))}

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span>{slides[current].eyebrow}</span>
        </div>
        <h1>{slides[current].headline}</h1>
        <p className="hero-body">{slides[current].body}</p>
        <div className="hero-actions">
          <Link href="/services" className="btn btn-primary btn-arrow">Our Services</Link>
          <Link href="/contact" className="btn btn-outline">Get in Touch</Link>
        </div>
      </div>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
      </div>
    </section>
  );
}
