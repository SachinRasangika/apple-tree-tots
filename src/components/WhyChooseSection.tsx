import React from 'react';
import { GraduationCap, Users, Globe, Heart, Shield, Sparkles } from 'lucide-react';
interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}
function FeatureCard({
  icon,
  title,
  description,
  delay
}: FeatureProps) {
  return <div className="group flex gap-6 opacity-0 animate-[fadeInUp_0.7s_ease-out_forwards] p-6 -m-6 rounded-sm hover:bg-white transition-all duration-500" style={{
    animationDelay: delay
  }}>
      <div className="shrink-0">
        <div className="w-14 h-14 rounded-full bg-[#2d5555]/20 border border-white/10 flex items-center justify-center text-[#2d5555] group-hover:bg-white group-hover:border-gray-300 group-hover:text-[#1a3a3a] transition-all duration-300">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-serif tracking-wide mb-3 group-hover:text-[#1a3a3a] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-400 font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>;
}
export function WhyChooseSection() {
  const features = [{
    icon: <GraduationCap size={24} />,
    title: 'Qualified ECE Educators',
    description: 'All lead teachers hold recognized degrees or diplomas in Early Childhood Education with 1+ years of experience. We maintain the highest professional standards.',
    delay: '0ms'
  }, {
    icon: <Users size={24} />,
    title: 'Small Class Ratios',
    description: 'Maximum 1:8 teacher-to-child ratio ensures personalized attention and individualized learning plans for every student.',
    delay: '150ms'
  }, {
    icon: <Globe size={24} />,
    title: 'English Medium Excellence',
    description: 'Full English immersion with native and bilingual teachers prepares children for international primary schools and global opportunities.',
    delay: '300ms'
  }, {
    icon: <Heart size={24} />,
    title: 'Montessori Philosophy',
    description: 'Child-centered approach fostering independence, curiosity, and love of learning through hands-on exploration and discovery.',
    delay: '450ms'
  }, {
    icon: <Shield size={24} />,
    title: 'Safe & Nurturing Environment',
    description: "Secure campus with modern facilities, outdoor learning spaces, and a culture of care that prioritizes your child's wellbeing.",
    delay: '600ms'
  }, {
    icon: <Sparkles size={24} />,
    title: 'Holistic Development',
    description: 'STEAM curriculum, cultural studies, outdoor education, and social-emotional learning create well-rounded, confident children.',
    delay: '750ms'
  }];
  return <section className="py-20 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left: Image */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-[3/4] overflow-hidden border border-white/10 relative group">
            <div className="absolute inset-0 bg-[#1a3a3a]/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1000&auto=format&fit=crop" alt="Teacher with children" className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105" />

            {/* Floating stat card */}
            <div className="absolute bottom-8 right-8 bg-[#1a3a3a] border border-white/10 p-6 z-20 backdrop-blur-sm">
              <p className="text-4xl font-serif tracking-wider mb-2">1:8</p>
              <p className="text-[10px] tracking-widest uppercase text-gray-400">
                Teacher-Child Ratio
              </p>
            </div>
          </div>

          {/* Decorative border */}
          <div className="absolute inset-0 border border-white/20 -translate-x-4 -translate-y-4 hidden lg:block pointer-events-none" />
        </div>

        {/* Right: Content */}
        <div className="lg:col-span-7">
          <span className="text-xs tracking-[0.2em] uppercase text-[#2d5555] font-bold mb-4 block">
            Our Commitment
          </span>
          <h2 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-8">
            Why Choose{' '}
            <span className="italic opacity-80">Apple Tree Tots</span>
          </h2>

          <div className="space-y-8">
            {features.map(feature => <FeatureCard key={feature.title} {...feature} />)}
          </div>
        </div>
      </div>
    </section>;
}