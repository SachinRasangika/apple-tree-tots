import React from 'react';
import { clsx } from 'clsx';
interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}
export function SectionHeader({
  label,
  title,
  subtitle,
  align = 'left',
  className
}: SectionHeaderProps) {
  return <div className={clsx('mb-12', {
    'text-left': align === 'left',
    'text-center': align === 'center',
    'text-right': align === 'right'
  }, className)}>
      {label && <span className="text-xs tracking-[0.2em] uppercase text-[#2d5555] font-bold mb-4 block">
          {label}
        </span>}
      <h2 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-6">
        {title}
      </h2>
      {subtitle && <p className="text-gray-300 font-light leading-relaxed max-w-2xl mx-auto text-sm">
          {subtitle}
        </p>}
    </div>;
}
interface PageHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
}
export function PageHeader({
  label,
  title,
  subtitle,
  className
}: PageHeaderProps) {
  return <div className={clsx('text-center max-w-3xl mx-auto', className)}>
      {label && <div className="flex items-center justify-center gap-4 md:gap-8 mb-8 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          <div className="h-px w-12 md:w-24 bg-white/30"></div>
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase opacity-70">
            {label}
          </span>
          <div className="h-px w-12 md:w-24 bg-white/30"></div>
        </div>}

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-widest uppercase mb-8">
        {title}
      </h1>

      {subtitle && <p className="text-sm md:text-base font-light text-gray-300 leading-relaxed tracking-wide">
          {subtitle}
        </p>}
    </div>;
}