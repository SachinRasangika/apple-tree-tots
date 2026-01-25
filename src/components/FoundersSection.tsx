import React from 'react';
import { Button } from './ui/Button';
import { AnimatedSection } from './AnimatedSection';

export function FoundersSection() {
  return <AnimatedSection className="py-20 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto block" animation="fade-in-up">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-6 text-[#2A372F]">
          Our Educational
          <br />
          <span className="italic opacity-80">Philosophy</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1: Qualified Educators */}
        <div className="group">
          <div className="aspect-square overflow-hidden rounded-lg mb-6">
            <img src="https://images.pexels.com/photos/8617981/pexels-photo-8617981.jpeg" alt="Qualified educators" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
          </div>
          <h3 className="text-lg font-semibold text-[#2A372F] mb-3">
            Qualified Educators
          </h3>
          <p className="text-[#2A372F]/70 font-light leading-relaxed text-sm">
            We employ only certified professionals with recognized diplomas in Early Childhood Education.
          </p>
        </div>

        {/* Feature 2: Community Focused */}
        <div className="group">
          <div className="aspect-square overflow-hidden rounded-lg mb-6">
            <img src="https://images.pexels.com/photos/8617899/pexels-photo-8617899.jpeg" alt="Welcoming environment" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
          </div>
          <h3 className="text-lg font-semibold text-[#2A372F] mb-3">
            Welcoming Environment
          </h3>
          <p className="text-[#2A372F]/70 font-light leading-relaxed text-sm">
            Serving both local families and the expatriate population with cultural warmth and inclusive values.
          </p>
        </div>

        {/* Feature 3: Professional Excellence */}
        <div className="group">
          <div className="aspect-square overflow-hidden rounded-lg mb-6">
            <img src="https://images.pexels.com/photos/6902351/pexels-photo-6902351.jpeg" alt="Professional care" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
          </div>
          <h3 className="text-lg font-semibold text-[#2A372F] mb-3">
            Professional Excellence
          </h3>
          <p className="text-[#2A372F]/70 font-light leading-relaxed text-sm">
            Your child receives expert care in a nurturing environment backed by quality training and experience.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Button>Our Team</Button>
      </div>
    </AnimatedSection>;
}
