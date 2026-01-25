import React from 'react';
import { Building2, Calendar, FileText, Users, Phone, Mail, Clock } from 'lucide-react';
import { Button } from './ui/Button';
import { AnimatedSection } from './AnimatedSection';

export function EnrollmentOfficeSection() {
  return <AnimatedSection className="py-20 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto block" animation="fade-in-up">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Column: Info & Contact */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8">
          <div>
            <span className="text-xs tracking-wide uppercase text-[#2d5555] font-semibold mb-4 block">
              Admissions
            </span>
            <h2 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-6 text-[#2A372F] leading-tight">
              Enrollment & <br /> <span className="italic opacity-80">Admissions</span> Office
            </h2>
            <p className="text-[#2A372F]/70 font-light leading-relaxed text-sm mb-8">
              Our admissions team is here to guide you through every step of
              enrolling your child at Apple Tree Tots. We offer personalized
              consultations to discuss your child's needs and our educational
              approach.
            </p>
          </div>

          <div className="space-y-6 border-l border-[#2A372F]/20 pl-6">
            {' '}
            <div className="flex items-start gap-4 opacity-80 hover:opacity-100 transition-opacity">
              <Building2 className="w-5 h-5 mt-1 shrink-0 text-[#2d5555]" />
              <div className="text-sm font-light tracking-wide">
                <p className="uppercase tracking-widest font-medium mb-1 text-[#2A372F]">
                  Office Location
                </p>
                <p className="text-[#2A372F]/70">Ahangama</p>
                <p className="text-[#2A372F]/70">Galle District, Southern Province</p>
              </div>
            </div>
            <div className="flex items-start gap-4 opacity-80 hover:opacity-100 transition-opacity">
              <Clock className="w-5 h-5 mt-1 shrink-0 text-[#2d5555]" />
              <div className="text-sm font-light tracking-wide">
                <p className="uppercase tracking-widest font-medium mb-1 text-[#2A372F]">
                  Office Hours
                </p>
                <p className="text-[#2A372F]/70">Mon - Fri: 09:00 - 17:00</p>
                <p className="text-[#2A372F]/70">Sat: By appointment only</p>
              </div>
            </div>{' '}
            <div className="flex items-start gap-4 opacity-80 hover:opacity-100 transition-opacity">
              <Mail className="w-5 h-5 mt-1 shrink-0 text-[#2d5555]" />
              <div className="text-sm font-light tracking-wide">
                <p className="uppercase tracking-widest font-medium mb-1 text-[#2A372F]">
                  Get in Touch
                </p>
                <p className="text-[#2A372F]/70">074 343 1488</p>
                <p className="text-[#2A372F]/70">@apple_tree_tots_preschool</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Button variant="primary" className="w-full sm:w-auto">
              Book Consultation
            </Button>
          </div>
        </div>

        {/* Right Column: Services & Visual */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service Cards */}
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <div className="bg-[#CDD1CB]/95 border border-[#2A372F]/20 rounded-2xl p-6 hover:shadow-md transition-all duration-300">
              <Users className="w-6 h-6 text-[#2A372F] mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-[#2A372F]">
                New Family Consultations
              </h3>
              <p className="text-xs text-[#2A372F]/70 font-light leading-relaxed">
                Personalized meetings to discuss your child's developmental
                needs, our curriculum, and how we can support your family's
                educational journey.
              </p>
            </div>

            <div className="bg-[#CDD1CB]/95 border border-[#2A372F]/20 rounded-2xl p-6 hover:shadow-md transition-all duration-300">
              <FileText className="w-6 h-6 text-[#2A372F] mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-[#2A372F]">
                Enrollment Assistance
              </h3>
              <p className="text-xs text-[#2A372F]/70 font-light leading-relaxed">
                Dedicated support for registration paperwork, program selection,
                and understanding our fee structure and payment options.
              </p>
            </div>

            <div className="bg-[#CDD1CB]/95 border border-[#2A372F]/20 rounded-2xl p-6 hover:shadow-md transition-all duration-300">
              <Calendar className="w-6 h-6 text-[#2A372F] mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-[#2A372F]">
                Parent Resources
              </h3>
              <p className="text-xs text-[#2A372F]/70 font-light leading-relaxed">
                Access to parenting workshops, developmental milestone guides,
                and community events for enrolled families.
              </p>
            </div>
          </div>

          {/* Visual Image */}
          <div className="relative h-full min-h-[300px] order-1 md:order-2 group overflow-hidden rounded-lg">
            <img src="/apple-tree-tots/images/testimonials/Gemini_Generated_Image_i6bhti6bhti6bhti.png" alt="Admissions Office" className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2A372F] to-transparent p-6 z-20">
              <span className="text-[10px] tracking-wide uppercase text-white/80 font-semibold">
                Admissions Office
              </span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>;
}
