import React from 'react';
import { clsx } from 'clsx';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'bordered' | 'elevated' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}
export function Card({
  children,
  className,
  variant = 'default',
  padding = 'md',
  hover = false
}: CardProps) {
  return <div className={clsx('transition-all duration-300 group', {
    // Variants
    'bg-[#2d5555]/10 border border-white/10': variant === 'default',
    'border border-white/10': variant === 'bordered',
    'bg-[#2d5555]/20 border border-white/5 shadow-xl': variant === 'elevated',
    'bg-[#2d5555]/20 border border-white/5 backdrop-blur-sm': variant === 'glass',
    // Padding
    'p-0': padding === 'none',
    'p-4': padding === 'sm',
    'p-6 md:p-8': padding === 'md',
    'p-8 md:p-12': padding === 'lg',
    // Hover effect
    'hover:bg-white cursor-pointer [&_h3]:hover:text-[#1a3a3a] [&_h4]:hover:text-[#1a3a3a] [&_p]:hover:text-gray-600 [&_svg]:hover:text-[#1a3a3a] [&_.icon-wrapper]:hover:bg-white [&_.icon-wrapper]:hover:border-gray-300': hover
  }, className)}>
      {children}
    </div>;
}
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}
export function FeatureCard({
  icon,
  title,
  description,
  className
}: FeatureCardProps) {
  return <Card variant="default" padding="lg" hover className={className}>
      <div className="flex items-start gap-4">
        <div className="icon-wrapper w-12 h-12 rounded-full bg-[#2d5555]/20 border border-white/10 flex items-center justify-center text-[#2d5555] shrink-0 transition-all duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-serif tracking-wide mb-3 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-gray-400 font-light leading-relaxed transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </Card>;
}
interface ImageCardProps {
  image: string;
  alt: string;
  title?: string;
  subtitle?: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape';
}
export function ImageCard({
  image,
  alt,
  title,
  subtitle,
  className,
  aspectRatio = 'video'
}: ImageCardProps) {
  return <div className={clsx('relative group overflow-hidden border border-white/10', className)}>
      <div className={clsx('relative overflow-hidden', {
      'aspect-square': aspectRatio === 'square',
      'aspect-video': aspectRatio === 'video',
      'aspect-[3/4]': aspectRatio === 'portrait',
      'aspect-[4/3]': aspectRatio === 'landscape'
    })}>
        <div className="absolute inset-0 bg-[#1a3a3a]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img src={image} alt={alt} className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105" />
        {(title || subtitle) && <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a3a3a] to-transparent p-6 z-20">
            {subtitle && <span className="text-[10px] tracking-widest uppercase text-white/80 block mb-1">
                {subtitle}
              </span>}
            {title && <h3 className="text-sm font-serif tracking-wide text-white">
                {title}
              </h3>}
          </div>}
      </div>
    </div>;
}