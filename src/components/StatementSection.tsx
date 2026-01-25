import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export function StatementSection() {
  return <div
    className="w-full h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden"
  >
    <img src="/apple-tree-tots/images/gallery/Gemini_Generated_Image_gy7zfkgy7zfkgy7z.png" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="relative z-10 text-center max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif leading-tight tracking-widest uppercase font-light text-white">
        <span className="block mb-4">Every child deserves a foundation</span>
        <span className="block mb-4">built on curiosity, confidence, and</span>
        <span className="block mb-4">care. At Apple Tree Tots, we nurture</span>
        <span className="block">the whole child for lifelong success.</span>
      </h2>
      <div className="mt-12 h-16 w-px bg-white/30 mx-auto"></div>
    </div>
  </div>;
}
