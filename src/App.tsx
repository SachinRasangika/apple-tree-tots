import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';
import { Navigation } from './components/Navigation';
import { FloatingBottomNavbar } from './components/FloatingBottomNavbar';
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

export function App() {
  return (
    <DarkModeProvider isDark={false}>
      <Router basename="/apple-tree-tots/">
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/application" element={<ApplicationPage />} />
          <Route path="/design-system" element={<DesignSystemPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/packages" element={<PackagesPage />} />
        </Routes>
        <FloatingBottomNavbar />
      </Router>
    </DarkModeProvider>
  );
}
