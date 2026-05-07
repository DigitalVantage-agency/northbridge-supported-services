'use client';

import { MeshGradient } from '@paper-design/shaders-react';
import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

/**
 * Brand colour palette for the mesh-gradient shader.
 * Built from the three specified hues — forest / acid-lime / gold-olive —
 * with tonal variants so the gradient has enough range to swirl beautifully.
 */
const SHADER_COLORS = [
  '#253B28', // darkest forest
  '#39563C', // primary forest
  '#4A6840', // lighter forest
  '#A29F15', // gold-olive
  '#B4E33D', // acid lime
  '#C7EF4A', // bright lime highlight
];

interface ShaderPageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
}

export default function ShaderPageHero({
  eyebrow,
  title,
  description,
}: ShaderPageHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 700 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => {
      if (sectionRef.current) {
        setDimensions({
          width: sectionRef.current.offsetWidth,
          height: sectionRef.current.offsetHeight,
        });
      }
    };
    update();
    const ro = new ResizeObserver(update);
    if (sectionRef.current) ro.observe(sectionRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="page-hero">

      {/* ── Mesh gradient ───────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        {mounted && (
          <MeshGradient
            width={dimensions.width}
            height={dimensions.height}
            colors={SHADER_COLORS}
            distortion={0.70}
            swirl={0.52}
            speed={0.28}
            offsetX={0.06}
            grainMixer={0}
            grainOverlay={0}
          />
        )}

        {/* Directional veil — ensures left-anchored text stays legible */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(110deg, rgba(37,59,40,0.78) 0%, rgba(37,59,40,0.50) 55%, rgba(37,59,40,0.18) 100%)',
          }}
        />
      </div>

      {/* ── Content ─────────────────────────────────────── */}
      <div className="container">
        <div className="page-hero-content">
          <div className="page-hero-eyebrow">
            <span>{eyebrow}</span>
          </div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>

    </section>
  );
}
