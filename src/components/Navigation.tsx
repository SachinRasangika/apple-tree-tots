import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getPageName = () => {
    const path = location.pathname.replace('/apple-tree-tots/', '').replace(/^\//, '');
    return path || 'home';
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#1a3a3a]/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => navigate('/')} className="flex flex-col cursor-pointer hover:opacity-80 transition-opacity">
          <span className="font-serif text-xl tracking-widest uppercase">
            Apple Tree Tots
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase opacity-70 ml-1">
            Preschool
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {[
            { label: 'Home', path: '/' },
            { label: 'Team', path: '/team' },
            { label: 'Packages', path: '/packages' },
            { label: 'Admissions', path: '/admissions' },
            { label: 'Contact', path: '/contact' },
          ].map(({ label, path }) => {
            const isActive = location.pathname === path || (path === '/' && location.pathname === '/apple-tree-tots/');
            return (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={`text-xs uppercase tracking-widest transition-colors relative group ${
                  isActive ? 'text-white' : 'hover:text-gray-300'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-white transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#1a3a3a] border-t border-white/10 p-6 flex flex-col space-y-6 shadow-xl mx-6 md:mx-12 lg:mx-16">
          {[
            { label: 'Home', path: '/' },
            { label: 'Team', path: '/team' },
            { label: 'Packages', path: '/packages' },
            { label: 'Admissions', path: '/admissions' },
            { label: 'Contact', path: '/contact' },
          ].map(({ label, path }) => {
            const isActive = location.pathname === path || (path === '/' && location.pathname === '/apple-tree-tots/');
            return (
              <button
                key={path}
                onClick={() => {
                  navigate(path);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-sm uppercase tracking-widest text-center py-2 border-b border-white/5 ${
                  isActive ? 'text-white font-semibold' : ''
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      )}
    </nav>;
}
