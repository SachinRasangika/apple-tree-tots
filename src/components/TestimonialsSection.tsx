import React from 'react';
import { Quote } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
interface TestimonialProps {
  quote: string;
  parent: string;
  child: string;
  program: string;
  delay: string;
}
function TestimonialCard({
  quote,
  parent,
  child,
  program,
  delay
}: TestimonialProps) {
  return <div className="group bg-[#2d5555]/10 border border-white/10 p-8 flex flex-col justify-between min-h-[280px] hover:bg-white transition-all duration-500 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]" style={{
    animationDelay: delay
  }}>
      <div>
        <Quote className="w-8 h-8 text-[#2d5555] mb-6 opacity-50 group-hover:text-[#1a3a3a] transition-colors duration-300" />
        <p className="text-sm font-light text-gray-300 leading-relaxed mb-6 italic group-hover:text-gray-700 transition-colors duration-300">
          "{quote}"
        </p>
      </div>

      <div className="border-t border-white/10 group-hover:border-gray-300 pt-4 transition-colors duration-300">
        <p className="text-xs font-medium tracking-widest uppercase text-white mb-1 group-hover:text-[#1a3a3a] transition-colors duration-300">
          {parent}
        </p>
        <p className="text-[10px] tracking-wide text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
          Parent of {child} • {program}
        </p>
      </div>
    </div>;
}
export function TestimonialsSection() {
  const testimonials = [{
    quote: 'The qualified teachers at Apple Tree Tots have been exceptional. My daughter has flourished in their Montessori program, and her English has improved dramatically in just six months.',
    parent: 'Sanduni Perera',
    child: 'Amaya, Age 4',
    program: 'Preschool Program',
    delay: '0ms'
  }, {
    quote: 'As expats living in Ahangama, finding quality English-medium education was crucial. Apple Tree Tots exceeded our expectations with their professional approach and nurturing environment.',
    parent: 'James & Claire Wilson',
    child: 'Oliver, Age 3',
    program: 'Toddler Program',
    delay: '150ms'
  }, {
    quote: "The small class sizes and individual attention have made all the difference. The teachers genuinely care about each child's development and communicate regularly with parents.",
    parent: 'Rohan Fernando',
    child: 'Dilan, Age 5',
    program: 'Pre-K Program',
    delay: '300ms'
  }];
  return <AnimatedSection className="py-20 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto border-t border-white/10 block" animation="fade-in-up">
      <div className="mb-16 text-center">
        <span className="text-xs tracking-[0.2em] uppercase text-[#2d5555] font-bold mb-4 block">
          Parent Voices
        </span>
        <h2 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-6">
          What Families <span className="italic opacity-80">Are Saying</span>
        </h2>
        <p className="text-gray-300 font-light max-w-2xl mx-auto text-sm">
          Hear from parents in our community about their experience with Apple
          Tree Tots Preschool
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(testimonial => <TestimonialCard key={testimonial.parent} {...testimonial} />)}
      </div>
    </AnimatedSection>;
}
