import React from 'react';
import { Instagram, Camera, Heart, MessageCircle } from 'lucide-react';
import { Button } from './ui/Button';
export function InstagramSection() {
  return <section className="py-20 bg-[#152e2e]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.2em] uppercase text-[#2d5555] font-bold mb-4 block">
            Stay Connected
          </span>
          <h2 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-6">
            Follow Our <span className="italic opacity-80">Daily Journey</span>
          </h2>
          <p className="text-gray-300 font-light leading-relaxed max-w-2xl mx-auto text-sm md:text-base mb-8">
            Instagram is our primary hub for sharing daily activities, events,
            and updates. See what's happening in our classrooms and connect with
            our community.
          </p>

          {/* Instagram Handle */}
          <a href="https://instagram.com/apple_tree_tots_preschool" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#2d5555]/20 border border-white/10 px-8 py-4 hover:bg-[#2d5555]/30 transition-colors duration-300 group">
            <Instagram size={24} className="text-[#2d5555] group-hover:text-white transition-colors" />
            <span className="text-sm tracking-wide">
              @apple_tree_tots_preschool
            </span>
          </a>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#2d5555]/10 border border-white/10 p-8 text-center opacity-0 animate-[fadeInUp_0.7s_ease-out_forwards]">
            <Camera className="w-10 h-10 text-[#2d5555] mx-auto mb-4" />
            <h3 className="text-sm font-serif tracking-wide mb-3">
              Daily Updates
            </h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              See photos and videos of classroom activities, outdoor play, and
              special events
            </p>
          </div>

          <div className="bg-[#2d5555]/10 border border-white/10 p-8 text-center opacity-0 animate-[fadeInUp_0.7s_ease-out_forwards]" style={{
          animationDelay: '150ms'
        }}>
            <MessageCircle className="w-10 h-10 text-[#2d5555] mx-auto mb-4" />
            <h3 className="text-sm font-serif tracking-wide mb-3">
              Direct Messaging
            </h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              DM us to schedule campus tours, ask questions, or inquire about
              enrollment
            </p>
          </div>

          <div className="bg-[#2d5555]/10 border border-white/10 p-8 text-center opacity-0 animate-[fadeInUp_0.7s_ease-out_forwards]" style={{
          animationDelay: '300ms'
        }}>
            <Heart className="w-10 h-10 text-[#2d5555] mx-auto mb-4" />
            <h3 className="text-sm font-serif tracking-wide mb-3">
              Community Connection
            </h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Join our parent community and stay informed about announcements
              and events
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#2d5555]/10 border border-white/10 p-8 md:p-12 text-center">
          <h3 className="text-xl font-serif tracking-wide mb-4">
            Ready to Learn More?
          </h3>
          <p className="text-sm text-gray-400 font-light mb-6 max-w-lg mx-auto">
            The best way to experience Apple Tree Tots is to visit us in person
            or connect with us on Instagram. We'd love to show you around!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://instagram.com/apple_tree_tots_preschool" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="w-full sm:w-auto">
                <Instagram size={16} className="mr-2" />
                Follow on Instagram
              </Button>
            </a>
            <a href="tel:0743431488">
              <Button variant="outline" className="w-full sm:w-auto">
                Call to Schedule Tour
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>;
}