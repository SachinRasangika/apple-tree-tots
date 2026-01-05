import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        <div className="flex flex-col">
          <span className="font-serif text-xl tracking-widest uppercase">
            Apple Tree Tots
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase opacity-70 ml-1">
            Preschool
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {['Home', 'Programs', 'Packages', 'Admissions', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-xs uppercase tracking-widest hover:text-gray-300 transition-colors relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </a>)}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-[#1a3a3a] border-t border-white/10 p-6 flex flex-col space-y-6 shadow-xl mx-6 md:mx-12 lg:mx-16">
          {['Home', 'Programs', 'Packages', 'Admissions', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm uppercase tracking-widest text-center py-2 border-b border-white/5" onClick={() => setIsMobileMenuOpen(false)}>
                {item}
              </a>)}
        </div>}
    </nav>;
}