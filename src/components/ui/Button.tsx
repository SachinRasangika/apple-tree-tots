import React from 'react';
import { clsx } from 'clsx';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
}
export function Button({
  children,
  className,
  variant = 'outline',
  size = 'md',
  ...props
}: ButtonProps) {
  return <button className={clsx('inline-flex items-center justify-center transition-all duration-300 uppercase tracking-widest font-medium text-xs', {
    'border border-white hover:bg-white hover:text-[#1a3a3a] [&>svg]:hover:text-[#1a3a3a]': variant === 'outline',
    'bg-white text-[#1a3a3a] hover:bg-white/90': variant === 'primary',
    'underline underline-offset-4 hover:text-gray-300': variant === 'text',
    'px-4 py-2': size === 'sm',
    'px-8 py-3': size === 'md',
    'px-10 py-4': size === 'lg'
  }, className)} {...props}>
      {children}
    </button>;
}