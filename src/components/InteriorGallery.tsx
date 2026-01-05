import React, { Children } from 'react';
export function InteriorGallery() {
  const images = [{
    url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1000&auto=format&fit=crop',
    alt: 'Bright classroom with learning materials',
    className: 'col-span-1 md:col-span-2 row-span-2'
  }, {
    url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop',
    alt: 'Children engaged in activities',
    className: 'col-span-1 md:col-span-1 row-span-1'
  }, {
    url: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800&auto=format&fit=crop',
    alt: 'Outdoor play area',
    className: 'col-span-1 md:col-span-1 row-span-1'
  }, {
    url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop',
    alt: 'Reading corner',
    className: 'col-span-1 md:col-span-2 row-span-1'
  }];
  return <section className="py-20 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
      <div className="flex justify-between items-end mb-12 border-b border-white/20 pb-6">
        <h2 className="text-2xl md:text-3xl font-serif tracking-widest uppercase">
          Our Facilities
        </h2>
        <div className="text-right hidden md:block">
          <p className="text-xs tracking-widest uppercase opacity-70">
            Ahangama Campus
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 auto-rows-[200px] md:auto-rows-[300px]">
        {images.map((img, idx) => <div key={idx} className={`relative group overflow-hidden ${img.className}`}>
            <img src={img.url} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-xs uppercase tracking-widest border border-white px-4 py-2">
                View Gallery
              </span>
            </div>
          </div>)}
      </div>

      <div className="flex justify-between mt-4 text-[10px] uppercase tracking-widest opacity-50">
        <span>Apple Tree Tots Preschool</span>
        <span>Ahangama, Galle</span>
      </div>
    </section>;
}