import React, { Children } from 'react';
export function HeroSection() {
  return <section className="relative min-h-screen flex flex-col items-center pt-32 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Decorative Title */}
      <div className="w-full max-w-[1400px] mx-auto mb-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4 md:gap-8">
          <span className="text-2xl md:text-4xl font-serif tracking-widest">
            APPLE
          </span>
          <div className="hidden md:block h-px w-24 bg-white/50"></div>
          <span className="text-3xl md:text-5xl font-serif tracking-[0.2em]">
            TREE TOTS
          </span>
          <div className="hidden md:block h-px w-24 bg-white/50"></div>
          <span className="text-2xl md:text-4xl font-serif tracking-widest">
            PRESCHOOL
          </span>
        </div>
      </div>

      {/* Main Image */}
      <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm mb-12 group">
        <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/10 transition-colors duration-700"></div>
        <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=2000&auto=format&fit=crop" alt="Children learning at Apple Tree Tots" className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[2s]" />
      </div>

      {/* Subtitle */}
      <div className="max-w-2xl mx-auto text-center px-6">
        <p className="text-sm md:text-base font-light tracking-wide leading-relaxed opacity-90">
          Nurturing young minds in Ahangama's coastal community.
          <br className="hidden md:block" />
          Serving local families and expatriates with qualified educators and a
          warm, professional approach to early childhood education.
        </p>
      </div>
    </section>;
}