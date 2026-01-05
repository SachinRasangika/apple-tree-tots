import React from 'react';
import { clsx } from 'clsx';
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'solid';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className
}: BadgeProps) {
  return <span className={clsx('inline-flex items-center justify-center uppercase tracking-widest font-medium', {
    // Variants
    'bg-[#2d5555]/20 border border-white/10 text-white': variant === 'default',
    'border border-white/30 text-white': variant === 'outline',
    'bg-[#2d5555] text-white': variant === 'solid',
    // Sizes
    'text-[8px] px-2 py-1': size === 'sm',
    'text-[10px] px-3 py-1.5': size === 'md',
    'text-xs px-4 py-2': size === 'lg'
  }, className)}>
      {children}
    </span>;
}
interface LabelProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}
export function Label({
  children,
  icon,
  className
}: LabelProps) {
  return <div className={clsx('inline-flex items-center gap-2 text-[10px] tracking-widest uppercase', className)}>
      {icon && <span className="text-[#2d5555]">{icon}</span>}
      <span>{children}</span>
    </div>;
}