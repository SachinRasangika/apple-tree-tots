import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ServicesGrid } from './components/ServicesGrid';
import { FoundersSection } from './components/FoundersSection';
import { CoastalEnvironmentSection } from './components/CoastalEnvironmentSection';
import { StatementSection } from './components/StatementSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { InteriorGallery } from './components/InteriorGallery';
import { InteriorDesignSection } from './components/InteriorDesignSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { DailyRoutineSection } from './components/DailyRoutineSection';
import { InstagramSection } from './components/InstagramSection';
import { ClassScheduleSection } from './components/ClassScheduleSection';
import { PricingSection } from './components/PricingSection';
import { ClassesSection } from './components/ClassesSection';
import { JoinTeamSection } from './components/JoinTeamSection';
import { AddressSection } from './components/AddressSection';
import { CampusLocationsSection } from './components/CampusLocationsSection';
import { EnrollmentOfficeSection } from './components/EnrollmentOfficeSection';
import { Footer } from './components/Footer';
import { TeamPage } from './pages/TeamPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { DesignSystemPage } from './pages/DesignSystemPage';
import { ContactPage } from './pages/ContactPage';
import { PackagesPage } from './pages/PackagesPage';
// Simple router to demonstrate the pages
export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'team' | 'admissions' | 'design-system' | 'contact' | 'packages'>('home');
  if (currentPage === 'packages') {
    return <>
        {/* Temporary navigation override to switch pages for demo purposes */}
        <div className="fixed top-4 right-4 z-[100] flex gap-2">
          <button onClick={() => setCurrentPage('home')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Home
          </button>
          <button onClick={() => setCurrentPage('team')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Team
          </button>
          <button onClick={() => setCurrentPage('packages')} className="bg-white text-[#1a3a3a] border border-white px-3 py-1 text-[10px] uppercase tracking-widest">
            Packages
          </button>
          <button onClick={() => setCurrentPage('admissions')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Admissions
          </button>
          <button onClick={() => setCurrentPage('contact')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Contact
          </button>
          <button onClick={() => setCurrentPage('design-system')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Design System
          </button>
        </div>
        <PackagesPage />
      </>;
  }
  if (currentPage === 'contact') {
    return <>
        {/* Temporary navigation override to switch pages for demo purposes */}
        <div className="fixed top-4 right-4 z-[100] flex gap-2">
          <button onClick={() => setCurrentPage('home')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Home
          </button>
          <button onClick={() => setCurrentPage('team')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Team
          </button>
          <button onClick={() => setCurrentPage('packages')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Packages
          </button>
          <button onClick={() => setCurrentPage('admissions')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Admissions
          </button>
          <button onClick={() => setCurrentPage('contact')} className="bg-white text-[#1a3a3a] border border-white px-3 py-1 text-[10px] uppercase tracking-widest">
            Contact
          </button>
          <button onClick={() => setCurrentPage('design-system')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Design System
          </button>
        </div>
        <ContactPage />
      </>;
  }
  if (currentPage === 'design-system') {
    return <>
        {/* Temporary navigation override to switch pages for demo purposes */}
        <div className="fixed top-4 right-4 z-[100] flex gap-2">
          <button onClick={() => setCurrentPage('home')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Home
          </button>
          <button onClick={() => setCurrentPage('team')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Team
          </button>
          <button onClick={() => setCurrentPage('packages')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Packages
          </button>
          <button onClick={() => setCurrentPage('admissions')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Admissions
          </button>
          <button onClick={() => setCurrentPage('contact')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Contact
          </button>
          <button onClick={() => setCurrentPage('design-system')} className="bg-white text-[#1a3a3a] border border-white px-3 py-1 text-[10px] uppercase tracking-widest">
            Design System
          </button>
        </div>
        <DesignSystemPage />
      </>;
  }
  if (currentPage === 'team') {
    return <>
        {/* Temporary navigation override to switch pages for demo purposes */}
        <div className="fixed top-4 right-4 z-[100] flex gap-2">
          <button onClick={() => setCurrentPage('home')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Home
          </button>
          <button onClick={() => setCurrentPage('team')} className="bg-white text-[#1a3a3a] border border-white px-3 py-1 text-[10px] uppercase tracking-widest">
            Team
          </button>
          <button onClick={() => setCurrentPage('packages')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Packages
          </button>
          <button onClick={() => setCurrentPage('admissions')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Admissions
          </button>
          <button onClick={() => setCurrentPage('contact')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Contact
          </button>
          <button onClick={() => setCurrentPage('design-system')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Design System
          </button>
        </div>
        <TeamPage />
      </>;
  }
  if (currentPage === 'admissions') {
    return <>
        {/* Temporary navigation override to switch pages for demo purposes */}
        <div className="fixed top-4 right-4 z-[100] flex gap-2">
          <button onClick={() => setCurrentPage('home')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Home
          </button>
          <button onClick={() => setCurrentPage('team')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Team
          </button>
          <button onClick={() => setCurrentPage('packages')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Packages
          </button>
          <button onClick={() => setCurrentPage('admissions')} className="bg-white text-[#1a3a3a] border border-white px-3 py-1 text-[10px] uppercase tracking-widest">
            Admissions
          </button>
          <button onClick={() => setCurrentPage('contact')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Contact
          </button>
          <button onClick={() => setCurrentPage('design-system')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
            Design System
          </button>
        </div>
        <AdmissionsPage />
      </>;
  }
  return <div className="min-h-screen bg-[#1a3a3a] text-white selection:bg-[#2d5555] selection:text-white">
      {/* Temporary navigation override */}
      <div className="fixed top-4 right-4 z-[100] flex gap-2">
        <button onClick={() => setCurrentPage('home')} className="bg-white text-[#1a3a3a] border border-white px-3 py-1 text-[10px] uppercase tracking-widest">
          Home
        </button>
        <button onClick={() => setCurrentPage('team')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
          Team
        </button>
        <button onClick={() => setCurrentPage('packages')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
          Packages
        </button>
        <button onClick={() => setCurrentPage('admissions')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
          Admissions
        </button>
        <button onClick={() => setCurrentPage('contact')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
          Contact
        </button>
        <button onClick={() => setCurrentPage('design-system')} className="bg-[#1a3a3a] border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#1a3a3a] transition-colors">
          Design System
        </button>
      </div>
      <Navigation />
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
        <CampusLocationsSection />
        <EnrollmentOfficeSection />
      </main>
      <Footer />
    </div>;
}