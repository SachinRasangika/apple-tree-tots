import React, { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
  delay?: number;
}

export function AnimatedSection({
  children,
  className = '',
  animation = 'fade-in-up',
  delay = 0
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    margin: '0px 0px -50px 0px'
  });

  const animationClass = inView ? `animate-in animate-${animation}` : 'opacity-0';
  const style = inView ? { animationDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={`${animationClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
