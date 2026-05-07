import { ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

export default function GlowCard({ children, className = '', innerClassName = '' }: GlowCardProps) {
  return (
    <div className={`glow-card ${className}`}>
      <div className={`glow-card-inner ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
}
