import React from 'react';
import { Users, Clock, BookOpen, Sparkles, Star, Heart } from 'lucide-react';
import { Button } from './ui/Button';
interface PricingTierProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  icon: React.ReactNode;
  image?: string;
  highlighted?: boolean;
  delay: string;
}
function PricingTier({
  title,
  price,
  period,
  features,
  icon,
  image,
  highlighted,
  delay
}: PricingTierProps) {
  return <div className={`group relative overflow-hidden opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards] transition-all duration-300 ${highlighted ? 'bg-[#2d5555]/30 border-2 border-[#2d5555]' : 'bg-[#1a3a3a]/50 border border-white/10 hover:bg-white hover:border-white'}`} style={{
    animationDelay: delay
  }}>
      {/* Icon Badge */}
      <div className={`absolute top-6 right-6 w-12 h-12 rounded-full bg-[#2d5555]/20 border border-white/10 flex items-center justify-center text-[#2d5555] transition-all duration-300 ${!highlighted && 'group-hover:bg-white group-hover:border-gray-300 group-hover:text-[#1a3a3a]'}`}>
        {icon}
      </div>

      <div className="p-8">
        {/* Title & Price */}
        <div className="mb-6">
          <h3 className={`text-xl font-serif tracking-wide mb-2 transition-colors duration-300 ${!highlighted && 'group-hover:text-[#1a3a3a]'}`}>
            {title}
          </h3>
          <div className="flex items-baseline gap-2">
            <span className={`text-3xl font-serif tracking-wide transition-colors duration-300 ${!highlighted && 'group-hover:text-[#1a3a3a]'}`}>
              {price}
            </span>
            <span className={`text-xs text-gray-400 tracking-wide transition-colors duration-300 ${!highlighted && 'group-hover:text-gray-600'}`}>
              {period}
            </span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, idx) => <li key={idx} className="flex items-start gap-3 text-sm">
              <div className={`w-1.5 h-1.5 rounded-full bg-[#2d5555] mt-2 shrink-0 transition-colors duration-300 ${!highlighted && 'group-hover:bg-[#1a3a3a]'}`} />
              <span className={`text-gray-300 font-light leading-relaxed transition-colors duration-300 ${!highlighted && 'group-hover:text-gray-700'}`}>
                {feature}
              </span>
            </li>)}
        </ul>

        {/* CTA */}
        <Button variant={highlighted ? 'primary' : 'outline'} className={`w-full transition-colors ${!highlighted && 'group-hover:bg-[#1a3a3a] group-hover:text-white group-hover:border-[#1a3a3a]'}`}>
          Enroll Now
        </Button>
      </div>

      {/* Hover Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-[#2d5555]/0 to-[#2d5555]/10 opacity-0 transition-opacity duration-500 pointer-events-none ${highlighted && 'group-hover:opacity-100'}`} />
    </div>;
}
export function PricingSection() {
  const pricingTiers = [{
    title: 'Toddler Program',
    price: 'Rs 25,000',
    period: 'per month',
    features: ['Ages 2-3 years', 'Half-day sessions (4 hours)', 'Sensory play and exploration', 'Parent orientation included', 'Small group activities'],
    icon: <Heart size={20} />,
    highlighted: false,
    delay: '0ms'
  }, {
    title: 'Preschool Program',
    price: 'Rs 30,000',
    period: 'per month',
    features: ['Ages 3-4 years', 'Full-day option available', 'English medium instruction', 'Montessori curriculum', 'Outdoor learning daily'],
    icon: <Star size={20} />,
    highlighted: true,
    delay: '150ms'
  }, {
    title: 'Pre-K Program',
    price: 'Rs 32,000',
    period: 'per month',
    features: ['Ages 4-5 years', 'School readiness focus', 'Advanced literacy skills', 'Primary school preparation', 'STEAM activities'],
    icon: <BookOpen size={20} />,
    highlighted: false,
    delay: '300ms'
  }, {
    title: 'Full-Time Care',
    price: 'Rs 35,000',
    period: 'per month',
    features: ['Extended hours (7:30 AM - 6:00 PM)', 'All age groups welcome', 'Meals and snacks included', 'Flexible scheduling', 'Holiday care available'],
    icon: <Clock size={20} />,
    highlighted: false,
    delay: '450ms'
  }, {
    title: 'Half-Day Program',
    price: 'Rs 20,000',
    period: 'per month',
    features: ['Morning sessions (8:00 AM - 12:00 PM)', 'All age groups', 'Core curriculum included', 'Flexible start dates', 'Perfect for working parents'],
    icon: <Users size={20} />,
    highlighted: false,
    delay: '600ms'
  }, {
    title: 'Trial Week',
    price: 'Rs 8,000',
    period: 'one week',
    features: ['5-day trial period', 'Experience our program', 'No long-term commitment', 'Meet teachers and students', 'Full refund if not satisfied'],
    icon: <Sparkles size={20} />,
    highlighted: false,
    delay: '750ms'
  }];
  return <section className="py-20 bg-[#152e2e]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs tracking-[0.2em] uppercase text-[#2d5555] font-bold mb-4 block">
            Investment in Excellence
          </span>
          <h2 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-6">
            Our <span className="italic opacity-80">Programs</span>
          </h2>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            Choose the program that best fits your child's needs and your
            family's schedule. All programs include our Montessori curriculum,
            qualified teachers, and nurturing environment.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pricingTiers.map(tier => <PricingTier key={tier.title} {...tier} />)}
        </div>

        {/* Additional Info */}
        <div className="bg-[#1a3a3a]/50 border border-white/10 p-8 text-center">
          <h3 className="text-lg font-serif tracking-wide mb-4">
            Sibling Discounts Available
          </h3>
          <p className="text-sm text-gray-400 font-light mb-6 max-w-2xl mx-auto">
            We offer 10% discount for the second child and 15% for the third
            child when multiple siblings are enrolled simultaneously. Contact us
            to learn more about our flexible payment options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary">Schedule a Tour</Button>
            <Button variant="outline">Contact Admissions</Button>
          </div>
        </div>
      </div>
    </section>;
}