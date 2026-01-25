import React, { useState } from 'react';
import { Button } from './ui/Button';
import { AnimatedSection } from './AnimatedSection';

export function FoundersSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStart - touchEnd > 50) {
      // Swiped left
      setCurrentSlide((prev) => (prev + 1) % 3);
    }
    if (touchEnd - touchStart > 50) {
      // Swiped right
      setCurrentSlide((prev) => (prev - 1 + 3) % 3);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };
  return <AnimatedSection className="py-20 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto block" animation="fade-in-up">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-6 text-[#2A372F]">
          Our Educational
          <br />
          <span className="italic opacity-80">Philosophy</span>
        </h2>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Mobile Carousel with Pagination & Arrows */}
      <div className="md:hidden">
        <div className="relative overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {/* Feature 1: Qualified Educators */}
            <div className="flex-shrink-0 w-full px-2 group">
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
            <div className="flex-shrink-0 w-full px-2 group">
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
            <div className="flex-shrink-0 w-full px-2 group">
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

          {/* Arrow Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#2A372F]/30 hover:bg-[#2A372F]/50 text-[#2A372F] rounded-full p-2 transition-all duration-200 z-10"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#2A372F]/30 hover:bg-[#2A372F]/50 text-[#2A372F] rounded-full p-2 transition-all duration-200 z-10"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          <button
            onClick={() => setCurrentSlide(0)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === 0 ? 'bg-[#2A372F] w-8' : 'bg-[#2A372F]/30 w-2 hover:bg-[#2A372F]/50'
            }`}
            aria-label="Qualified Educators"
          />
          <button
            onClick={() => setCurrentSlide(1)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === 1 ? 'bg-[#2A372F] w-8' : 'bg-[#2A372F]/30 w-2 hover:bg-[#2A372F]/50'
            }`}
            aria-label="Welcoming Environment"
          />
          <button
            onClick={() => setCurrentSlide(2)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === 2 ? 'bg-[#2A372F] w-8' : 'bg-[#2A372F]/30 w-2 hover:bg-[#2A372F]/50'
            }`}
            aria-label="Professional Excellence"
          />
        </div>
      </div>

      <div className="mt-16 text-center">
        <Button>Our Team</Button>
      </div>
    </AnimatedSection>;
}
