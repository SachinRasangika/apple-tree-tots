import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export function InteriorDesignSection() {
  return <AnimatedSection className="bg-[#2d4a4a] text-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden block" animation="fade-in-up">
      <div className="max-w-7xl mx-auto">
        {/* Statement Text */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed tracking-wide uppercase">
            A nurturing environment designed for growth, creativity, and exploration. Every space at Apple Tree Tots fosters learning through play and nature.
          </h2>
        </div>

        {/* Section Heading */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-light tracking-widest uppercase">
            Our Spaces & Facilities
          </h3>
        </div>

        {/* Gallery Grid */}
        <div className="relative">
          {/* Desktop Layout - Asymmetric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-4">
            {/* Row 1 */}
            {/* Image 1 - Left */}
            <div className="md:col-span-3 aspect-[3/4] overflow-hidden">
              <img src="/apple-tree-tots/images/team/Gemini_Generated_Image_w9xky2w9xky2w9xk.png" alt="Bright classroom with learning materials" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            {/* Image 2 - Middle Left */}
            <div className="md:col-span-3 aspect-[3/4] overflow-hidden">
              <img src="/apple-tree-tots/images/hero/homehero.png" alt="Outdoor learning and nature exploration" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            {/* Spacer / Text Area */}
            <div className="md:col-span-3 flex items-end justify-center pb-4 md:pb-8">
              <div className="text-white flex items-baseline gap-2">
                <span className="text-xs opacity-70">at</span>
                <span className="text-2xl tracking-widest uppercase font-light">
                  APPLE TREE TOTS
                </span>
              </div>
            </div>

            {/* Image 3 - Right */}
            <div className="md:col-span-3 aspect-[3/4] overflow-hidden">
              <img src="/apple-tree-tots/images/testimonials/Gemini_Generated_Image_i6bhti6bhti6bhti.png" alt="Campus facilities and spaces" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            {/* Row 2 */}
            {/* Spacer Left */}
            <div className="hidden md:block md:col-span-3">
              <div className="h-full flex items-end pb-2">
                <span className="text-xs tracking-wider opacity-80">
                  Ahangama Preschool
                </span>
              </div>
            </div>

            {/* Image 4 - Center Left */}
            <div className="md:col-span-3 aspect-[3/4] overflow-hidden">
              <img src="/apple-tree-tots/images/gallery/Gemini_Generated_Image_dcqagmdcqagmdcqa.png" alt="Teacher engagement with children" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            {/* Image 5 - Center Right */}
            <div className="md:col-span-3 aspect-[3/4] overflow-hidden">
              <img src="/apple-tree-tots/images/gallery/Gemini_Generated_Image_wqpza0wqpza0wqpz.png" alt="Happy children and families" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            {/* Spacer Right */}
            <div className="hidden md:block md:col-span-3">
              <div className="h-full flex items-end justify-end pb-2">
                <span className="text-xs tracking-wider opacity-80">
                  Photography: Sien Koolen
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Credits (visible only on small screens) */}
          <div className="flex justify-between md:hidden mt-4 text-xs opacity-80">
            <span>Apple Tree Tots</span>
            <span>Photography: Sien Koolen</span>
          </div>
        </div>
      </div>
    </AnimatedSection>;
}
