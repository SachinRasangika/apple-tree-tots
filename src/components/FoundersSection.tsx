import React from 'react';
import { Button } from './ui/Button';
export function FoundersSection() {
  return <section className="py-20 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
      <h2 className="text-2xl md:text-3xl font-serif tracking-widest uppercase mb-12">
        Our Educational Philosophy
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Main Image */}
        <div className="lg:col-span-7 relative">
          <div className="aspect-[4/3] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1600&auto=format&fit=crop" alt="Teachers with children" className="w-full h-full object-cover hover:scale-105 transition-all duration-700" />
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-5 flex flex-col justify-center h-full pt-8 lg:pt-0">
          <div className="bg-[#2d5555]/20 p-8 md:p-12 border border-white/5 backdrop-blur-sm">
            <h3 className="text-xl font-serif tracking-widest uppercase mb-6">
              Professional Excellence
            </h3>
            <p className="text-gray-300 font-light leading-relaxed mb-8 text-sm md:text-base">
              Apple Tree Tots Preschool serves Ahangama's coastal community,
              welcoming both local families and the growing expatriate
              population. We employ only qualified educators with recognized
              diplomas in Early Childhood Education, ensuring your child
              receives professional care in a nurturing, culturally warm
              environment.
            </p>
            <Button>Our Team</Button>
          </div>

          <div className="mt-12 ml-auto w-2/3 hidden lg:block">
            <div className="aspect-square overflow-hidden">
              <img src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800&auto=format&fit=crop" alt="Classroom detail" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>;
}