import React, { Children } from 'react';
export function HeroSection() {
  return <section className="relative min-h-screen flex flex-col items-center pt-32 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Decorative Title */}
      <div className="w-full max-w-[1400px] mx-auto mb-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4 md:gap-8">
          <span className="text-2xl md:text-4xl font-semibold text-[#2A372F]">
            APPLE
          </span>
          <div className="hidden md:block h-px w-24 bg-[#2d5555]/30"></div>
          <span className="text-3xl md:text-5xl font-semibold text-[#2A372F]">
            TREE TOTS
          </span>
          <div className="hidden md:block h-px w-24 bg-[#2d5555]/30"></div>
          <span className="text-2xl md:text-4xl font-semibold text-[#2A372F]">
            PRESCHOOL
          </span>
        </div>
      </div>

      {/* Main Image */}
      <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg mb-12 group">
        <img src="/apple-tree-tots/images/testimonials/Gemini_Generated_Image_i6bhti6bhti6bhti.png" alt="Children learning at Apple Tree Tots" className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[2s]" />
      </div>

      {/* Subtitle */}
      <div className="max-w-2xl mx-auto text-center px-6">
        <p className="text-sm md:text-base font-light leading-relaxed text-[#2A372F]/70">
          Nurturing young minds in Ahangama's coastal community.
          <br className="hidden md:block" />
          Serving local families and expatriates with qualified educators and a
          warm, professional approach to early childhood education.
        </p>
      </div>
    </section>;
}
