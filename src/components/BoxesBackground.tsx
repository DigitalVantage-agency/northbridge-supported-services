'use client';

import { useCallback, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const COLS = 80;
const ROWS = 50;

const COLORS = [
  'rgba(174, 183, 132, 0.55)',
  'rgba(174, 183, 132, 0.35)',
  'rgba(174, 183, 132, 0.75)',
  'rgba(13,  71,  21,  0.60)',
  'rgba(13,  71,  21,  0.40)',
  'rgba(4,   57,  21,  0.50)',
  'rgba(227, 219, 187, 0.35)',
  'rgba(227, 219, 187, 0.20)',
  'rgba(174, 183, 132, 0.45)',
];

function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function Cell({ col, row }: { col: number; row: number }) {
  const [bgColor, setBgColor] = useState('');

  const handleMouseEnter = useCallback(() => {
    setBgColor(randomColor());
  }, []);

  const handleMouseLeave = useCallback(() => {
    setBgColor('');
  }, []);

  return (
    <motion.div
      className="boxes-cell"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{ backgroundColor: bgColor }}
      transition={bgColor ? { duration: 0 } : { duration: 2, ease: 'easeOut' }}
    >
      {col % 2 === 0 && row % 2 === 0 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="boxes-plus"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
      )}
    </motion.div>
  );
}

export default function BoxesBackground() {
  return (
    <div className="boxes-clip" aria-hidden="true">
      <div className="boxes-grid">
        {Array.from({ length: COLS }, (_, col) => (
          <div key={col} className="boxes-col">
            {Array.from({ length: ROWS }, (_, row) => (
              <Cell key={row} col={col} row={row} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
