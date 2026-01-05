import React from 'react';
import { Button } from './ui/Button';
import { AnimatedSection } from './AnimatedSection';
interface ServiceCardProps {
  title: string;
  date?: string;
  description?: string;
  cta?: string;
}
function ServiceCard({
  title,
  date,
  description,
  cta = 'BOOK'
}: ServiceCardProps) {
  return <div className="group border border-white/10 p-6 md:p-8 flex flex-col justify-between min-h-[240px] hover:bg-white transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-0 bg-[#2d5555] transition-all duration-300 group-hover:h-full opacity-50"></div>

      <div className="flex justify-between items-start mb-8">
        <h3 className="font-serif text-lg md:text-xl tracking-wide max-w-[70%] group-hover:text-[#1a3a3a] transition-colors duration-300">
          {title}
        </h3>
        {date && <span className="text-[10px] tracking-widest opacity-60 group-hover:text-gray-600 transition-colors duration-300">
            {date}
          </span>}
      </div>

      <div className="mt-auto">
        {description && <p className="text-xs text-gray-300 mb-6 font-light group-hover:text-gray-600 transition-colors duration-300">
            {description}
          </p>}
        <div className="flex justify-between items-end border-t border-white/10 group-hover:border-gray-300 pt-4 transition-colors duration-300">
          <span className="text-[10px] uppercase tracking-widest opacity-70 cursor-pointer hover:opacity-100 transition-opacity group-hover:text-gray-600">
            Read More
          </span>
          <span className="text-[10px] uppercase tracking-widest font-medium border-b border-transparent hover:border-[#1a3a3a] transition-all cursor-pointer group-hover:text-[#1a3a3a] group-hover:border-[#1a3a3a]">
            {cta}
          </span>
        </div>
      </div>
    </div>;
}
export function ServicesGrid() {
  const services = [{
    title: 'MONTESSORI CURRICULUM',
    description: 'Child-centered learning approach fostering independence'
  }, {
    title: 'ENGLISH MEDIUM',
    description: 'Comprehensive English language immersion program'
  }, {
    title: 'QUALIFIED TEACHERS',
    date: 'ECE Certified',
    description: 'Degree-holding educators with 1+ years experience'
  }, {
    title: 'SMALL CLASS SIZES',
    date: '1:8 ratio',
    description: 'Personalized attention for every child'
  }, {
    title: 'OUTDOOR LEARNING',
    date: 'daily',
    description: 'Nature-based activities in our garden space'
  }, {
    title: 'PARENT WORKSHOPS',
    date: 'monthly',
    description: 'Educational resources and community events'
  }, {
    title: 'CULTURAL PROGRAMS',
    date: 'year-round',
    description: 'Celebrating Sri Lankan heritage and traditions',
    cta: 'LEARN MORE'
  }, {
    title: 'SCHOOL READINESS',
    date: 'ages 4-5',
    description: 'Preparing children for primary school success'
  }];
  return <AnimatedSection className="py-20 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto block" animation="fade-in-up">
      <div className="mb-12 border-b border-white/20 pb-6">
        <h2 className="text-2xl md:text-3xl font-serif tracking-widest uppercase">
          A Foundation for <br />
          <span className="italic">Lifelong</span> Learning
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
        {services.map((service, index) => <div key={index} className="border-r border-b border-white/10 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]" style={{ animationDelay: `${index * 100}ms` }}>
            <ServiceCard {...service} />
          </div>)}
      </div>
    </AnimatedSection>;
}
