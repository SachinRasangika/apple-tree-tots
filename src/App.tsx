import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';
import { Navigation } from './components/Navigation';
import { EventBanner } from './components/EventBanner';
import { HomePage } from './pages/HomePage';
import { TeamPage } from './pages/TeamPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { ApplicationPage } from './pages/ApplicationPage';
import { DesignSystemPage } from './pages/DesignSystemPage';
import { ContactPage } from './pages/ContactPage';
import { PackagesPage } from './pages/PackagesPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainContent({ isBannerVisible }: { isBannerVisible: boolean }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/apple-tree-tots/';

  // Add padding on non-home pages to account for fixed navbar + banner
  // pt-40 when banner is visible, pt-20 when banner is closed
  const paddingClass = !isHomePage ? (isBannerVisible ? 'pt-40' : 'pt-20') : '';

  return (
    <div className={paddingClass}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/application" element={<ApplicationPage />} />
        <Route path="/design-system" element={<DesignSystemPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/packages" element={<PackagesPage />} />
      </Routes>
    </div>
  );
}

export function App() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  return (
    <DarkModeProvider isDark={false}>
      <Router basename="/apple-tree-tots/">
        <ScrollToTop />
        {isBannerVisible && <EventBanner onClose={() => setIsBannerVisible(false)} />}
        <Navigation bannerVisible={isBannerVisible} />
        <MainContent isBannerVisible={isBannerVisible} />
      </Router>
    </DarkModeProvider>
  );
}
