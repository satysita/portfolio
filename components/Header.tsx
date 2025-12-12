import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
           {/* Placeholder for the user's logo. Replace src with actual logo path if available. */}
           <div className="w-10 h-10 md:w-12 md:h-12 relative flex-shrink-0">
             <img 
               src=" /images/logo.png " 
               alt="SK Logo" 
               className="w-full h-full object-contain rounded-lg"
               onError={(e) => {
                 (e.target as HTMLImageElement).style.display = 'none';
                 (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
               }}
             />
             {/* Fallback if image fails or isn't present */}
             <div className="hidden w-full h-full bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl absolute top-0 left-0">SK</div>
           </div>
           
           <div className="flex flex-col">
             <span className="text-xl font-bold text-white tracking-tight leading-none">Satyendra Kumar</span>
             <span className="text-[10px] md:text-xs text-primary font-medium tracking-widest uppercase mt-1">UI/UX + Frontend Developer</span>
           </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-white/80 hover:text-primary font-medium text-sm uppercase tracking-wide transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-card p-6 border-b border-white/10 flex flex-col gap-4 shadow-2xl">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-white/80 hover:text-primary font-medium text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};