import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark border-t border-white/5 py-12">
      <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">SK</div>
           <div className="flex flex-col items-start">
             <span className="text-xl font-bold text-white leading-none">Satyendra Kumar</span>
             <span className="text-[10px] text-muted uppercase tracking-wider mt-1">UI/UX + Frontend Developer</span>
           </div>
        </div>
        
        <p className="text-muted text-sm">© 2024 Satyendra Kumar. All rights reserved.</p>

        <div className="flex gap-6 text-sm font-medium text-white/80">
          <a href="#" className="hover:text-primary">Terms & Condition</a>
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};