import React from 'react';
import { GraduationCap, Users, Heart, TrendingUp } from 'lucide-react';
import { Button } from './ui/Button';
import { AnimatedSection } from './AnimatedSection';

export function JoinTeamSection() {
  return <AnimatedSection className="py-20 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto border-t border-white/10 block" animation="fade-in-up">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Image */}
        <div className="relative order-2 lg:order-1">
          <div className="aspect-[4/3] overflow-hidden border border-white/10 relative group">
            <div className="absolute inset-0 bg-[#1a3a3a]/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <img src="/apple-tree-tots/images/campus/Gemini_Generated_Image_6fd08v6fd08v6fd0.png" alt="Teacher with children" className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105" />

            {/* Overlay Badge */}
            <div className="absolute top-8 left-8 bg-[#1a3a3a] border border-white/10 px-6 py-3 z-20 backdrop-blur-sm">
              <span className="text-xs tracking-widest uppercase text-[#2d5555] font-bold">
                Now Hiring
              </span>
            </div>
          </div>

          {/* Decorative border */}
          <div className="absolute inset-0 border border-white/20 translate-x-4 translate-y-4 hidden lg:block pointer-events-none" />
        </div>

        {/* Right: Content */}
        <div className="order-1 lg:order-2">
          <span className="text-xs tracking-[0.2em] uppercase text-[#2d5555] font-bold mb-4 block">
            Career Opportunities
          </span>
          <h2 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-6">
            Join Our <span className="italic opacity-80">Growing Team</span>
          </h2>
          <p className="text-gray-300 font-light leading-relaxed mb-8 text-sm md:text-base">
            We're actively expanding our teaching team to serve Ahangama's
            growing community. If you're passionate about early childhood
            education and want to make a meaningful impact, we'd love to hear
            from you.
          </p>

          {/* Current Openings */}
          <div className="bg-[#2d5555]/10 border border-white/10 p-6 mb-8">
            <h3 className="text-sm font-serif tracking-wide mb-4 flex items-center gap-2">
              <GraduationCap size={18} className="text-[#2d5555]" />
              Current Openings
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2d5555] mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-medium">
                    Trainee Teacher / Preschool Teacher
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Diploma in Early Childhood Education or relevant experience
                    preferred
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Join */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3">
              <Users size={16} className="text-[#2d5555] mt-1 shrink-0" />
              <div>
                <p className="text-xs font-medium mb-1">Growing School</p>
                <p className="text-[10px] text-gray-400">
                  Expanding student base
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Heart size={16} className="text-[#2d5555] mt-1 shrink-0" />
              <div>
                <p className="text-xs font-medium mb-1">Supportive Team</p>
                <p className="text-[10px] text-gray-400">
                  Collaborative culture
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TrendingUp size={16} className="text-[#2d5555] mt-1 shrink-0" />
              <div>
                <p className="text-xs font-medium mb-1">Career Growth</p>
                <p className="text-[10px] text-gray-400">
                  Professional development
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <GraduationCap size={16} className="text-[#2d5555] mt-1 shrink-0" />
              <div>
                <p className="text-xs font-medium mb-1">ECE Focus</p>
                <p className="text-[10px] text-gray-400">Structured learning</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:0743431488">
              <Button variant="primary">Call: 074 343 1488</Button>
            </a>
            <a href="https://instagram.com/apple_tree_tots_preschool" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">DM on Instagram</Button>
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>;
}
