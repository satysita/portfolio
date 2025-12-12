import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 filter blur-[120px] rounded-full z-0"></div>

      <div className="container mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-primary font-bold tracking-widest uppercase">I AM</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Satyendra Kumar, <br />
            <span className="text-muted text-4xl md:text-6xl block mt-2">Senior React Engineer</span>
          </h1>
          <p className="text-muted text-lg max-w-lg leading-relaxed">
            A personal portfolio showcasing mastery in React Component Architecture, 
            TypeScript, and High-Performance UI development. I bridge the gap between 
            complex engineering and elegant design.
          </p>
          
          <div className="pt-4">
            <button className="bg-primary hover:bg-red-600 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-primary/30">
              Download CV
            </button>
          </div>

          <div className="pt-8">
            <p className="text-sm text-muted mb-3">Find me on</p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-card border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
           {/* Abstract Circle Graphic mimicking the template */}
           <div className="relative z-10">
              {/* Image set to banner.png with original layout constraints */}
              <img 
                src="/images/banner.jpg" 
                alt="Satyendra Kumar - UX Designer" 
                className="rounded-2xl shadow-2xl transition-all duration-500 object-cover h-[600px] w-full border border-white/5 bg-dark"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/600/700?grayscale";
                }}
              />
              {/* Badge Overlay */}
              <div className="absolute -bottom-10 -left-10 bg-card p-6 rounded-2xl border border-white/10 shadow-xl max-w-xs">
                 <div className="text-4xl font-bold text-white mb-1">10+</div>
                 <div className="text-primary font-medium">Years Of Experience</div>
                 <div className="text-muted text-sm mt-2">Specialized in scalable frontend architecture</div>
              </div>
           </div>
           
           {/* Decorative Red shape behind */}
           <div className="absolute top-10 -right-10 w-full h-full border-2 border-primary/30 rounded-2xl -z-10 transform rotate-3"></div>
        </div>
      </div>
    </section>
  );
};