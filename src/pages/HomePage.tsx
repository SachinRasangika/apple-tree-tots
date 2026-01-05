import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ServicesGrid } from '../components/ServicesGrid';
import { FoundersSection } from '../components/FoundersSection';
import { CoastalEnvironmentSection } from '../components/CoastalEnvironmentSection';
import { StatementSection } from '../components/StatementSection';
import { WhyChooseSection } from '../components/WhyChooseSection';
import { InteriorDesignSection } from '../components/InteriorDesignSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { DailyRoutineSection } from '../components/DailyRoutineSection';
import { InstagramSection } from '../components/InstagramSection';
import { ClassScheduleSection } from '../components/ClassScheduleSection';
import { PricingSection } from '../components/PricingSection';
import { ClassesSection } from '../components/ClassesSection';
import { JoinTeamSection } from '../components/JoinTeamSection';
import { AddressSection } from '../components/AddressSection';
import { EnrollmentOfficeSection } from '../components/EnrollmentOfficeSection';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#1a3a3a] text-white selection:bg-[#2d5555] selection:text-white">
      <main>
        <HeroSection />
        <ServicesGrid />
        <FoundersSection />
        <CoastalEnvironmentSection />
        <StatementSection />
        <WhyChooseSection />
        <InteriorDesignSection />
        <TestimonialsSection />
        <DailyRoutineSection />
        <InstagramSection />
        <ClassScheduleSection />
        <PricingSection />
        <ClassesSection />
        <JoinTeamSection />
        <AddressSection />
        <EnrollmentOfficeSection />
      </main>
      <Footer />
    </div>
  );
}
