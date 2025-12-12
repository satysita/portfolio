import React from 'react';
import { SectionHeading } from './SectionHeading';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#080809]">
       <div className="container mx-auto px-6">
        <div className="bg-[#101012] rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
           {/* Decor */}
           <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading subtitle="CONTACT" title="Get Ready To Create Great" />
                
                <div className="space-y-6 mt-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1A1A1D] flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div>
                      <p className="text-muted text-sm">Phone</p>
                      <p className="text-white font-medium">+91 851 207 4075</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1A1A1D] flex items-center justify-center text-primary">
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    </div>
                    <div>
                      <p className="text-muted text-sm">Email</p>
                      <p className="text-white font-medium">saty.web@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-4 relative z-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Your Name" className="bg-[#0B0B0C] border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors" />
                    <input type="text" placeholder="Phone Number" className="bg-[#0B0B0C] border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors" />
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="email" placeholder="Your Email" className="bg-[#0B0B0C] border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors" />
                    <input type="text" placeholder="Subject" className="bg-[#0B0B0C] border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors" />
                 </div>
                 <textarea rows={4} placeholder="Your Message" className="w-full bg-[#0B0B0C] border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors"></textarea>
                 
                 <button type="button" className="w-full bg-gradient-to-r from-primary to-rose-600 text-white font-bold py-4 rounded-lg uppercase tracking-wider hover:opacity-90 transition-opacity">
                   Send Message
                 </button>
              </form>
           </div>
        </div>
       </div>
    </section>
  );
};