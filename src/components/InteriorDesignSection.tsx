import React from 'react';
export function InteriorDesignSection() {
  return <section className="bg-[#2d4a4a] text-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Statement Text */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed tracking-wide uppercase">
            The White Door Studio is a serene oasis in the midst of the hustle
            and bustle of the city. A hidden garden with endless possibilities.
          </h2>
        </div>

        {/* Section Heading */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-light tracking-widest uppercase">
            Interior Design
          </h3>
        </div>

        {/* Gallery Grid */}
        <div className="relative">
          {/* Desktop Layout - Asymmetric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-4">
            {/* Row 1 */}
            {/* Image 1 - Left */}
            <div className="md:col-span-3 aspect-[3/4] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2070&auto=format&fit=crop" alt="Green bedroom interior with patterned headboard" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            {/* Image 2 - Middle Left */}
            <div className="md:col-span-3 aspect-[3/4] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2080&auto=format&fit=crop" alt="Green marble kitchen detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            {/* Spacer / Text Area */}
            <div className="md:col-span-3 flex items-end justify-center pb-4 md:pb-8">
              <div className="text-white flex items-baseline gap-2">
                <span className="text-xs opacity-70">in</span>
                <span className="text-2xl tracking-widest uppercase font-light">
                  VTWONEN
                </span>
              </div>
            </div>

            {/* Image 3 - Right */}
            <div className="md:col-span-3 aspect-[3/4] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop" alt="Modern living room with green walls" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            {/* Row 2 */}
            {/* Spacer Left */}
            <div className="hidden md:block md:col-span-3">
              <div className="h-full flex items-end pb-2">
                <span className="text-xs tracking-wider opacity-80">
                  The White Door Studio
                </span>
              </div>
            </div>

            {/* Image 4 - Center Left */}
            <div className="md:col-span-3 aspect-[3/4] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070&auto=format&fit=crop" alt="Green armchair with patterned screen" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            {/* Image 5 - Center Right */}
            <div className="md:col-span-3 aspect-[3/4] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1932&auto=format&fit=crop" alt="Dining area with green walls" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
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
            <span>The White Door Studio</span>
            <span>Photography: Sien Koolen</span>
          </div>
        </div>
      </div>
    </section>;
}