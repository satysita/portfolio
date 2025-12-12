import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Code, Box, Layers, Zap, CheckCircle } from 'lucide-react';

export const ReactArchitecture: React.FC = () => {
  return (
    <section id="react-architecture" className="py-24 bg-dark relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          subtitle="ENGINEERING EXPERTISE" 
          title="React Component Architecture" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Theory & Explanation */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Intro Block */}
            <div className="prose prose-invert max-w-none text-muted">
              <p className="text-lg leading-relaxed mb-6">
                Modern UI development is driven by <strong>Component-Based Architecture</strong>. 
                I treat components not just as visual elements, but as isolated, reusable units of logic 
                that compose together to form complex applications.
              </p>
            </div>

            {/* Core Concepts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-colors group">
                <Box className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">Functional Components</h3>
                <p className="text-muted text-sm">
                  I exclusively use Functional Components over Class Components for their concise syntax, 
                  better performance optimizations, and hooks integration.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-colors group">
                <Zap className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">Hooks & State</h3>
                <p className="text-muted text-sm">
                  Leveraging <code>useState</code> for local UI state, <code>useEffect</code> for side effects, 
                  and custom hooks to abstract complex logic away from the UI layer.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-colors group">
                <Layers className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">Atomic Design</h3>
                <p className="text-muted text-sm">
                  Structuring components from Atoms (Buttons, Inputs) to Molecules (Forms) to Organisms (Navbars, Modals) for maximum reusability.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-colors group">
                <Code className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">Props & TypeScript</h3>
                <p className="text-muted text-sm">
                  Strict typing with TypeScript interfaces ensures components are self-documenting and robust against runtime errors.
                </p>
              </div>
            </div>
            
            {/* Skills List */}
             <div className="mt-8">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary block"></span> Tech Stack Summary
              </h4>
              <ul className="grid grid-cols-2 gap-3">
                {['HTML5, CSS3, Bootstrap', 'React 18+, TypeScript', 'UI/UX Fundamentals', 'Responsive Design (Mobile First)', 'Component Architecture', 'Clean Code & Maintainability'].map((skill, i) => (
                  <li key={i} className="flex items-center text-muted text-sm">
                    <CheckCircle size={16} className="text-primary mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Case Study */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-card to-[#252529] p-8 rounded-2xl border border-white/10 relative overflow-hidden h-full">
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full"></div>

              <div className="relative z-10">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4 inline-block">
                  Case Study
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Scalable Dashboard System
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-white/10 pl-4">
                    <h4 className="text-white font-semibold text-sm mb-1">The Challenge</h4>
                    <p className="text-muted text-sm">
                      Designing a leave calendar and admin dashboard that requires consistent styling across 50+ unique screens.
                    </p>
                  </div>

                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="text-white font-semibold text-sm mb-1">The Solution</h4>
                    <p className="text-muted text-sm">
                      I built a <strong>custom UI library</strong>. Instead of hardcoding a modal 50 times, I created a reusable <code>&lt;Modal&gt;</code> component that accepts <code>children</code>, <code>isOpen</code>, and <code>onClose</code> props.
                    </p>
                  </div>

                  <div className="bg-black/30 p-4 rounded-lg font-mono text-xs text-gray-300 overflow-x-auto border border-white/5">
                    <p className="text-green-400">// Example Usage</p>
                    <p className="mt-1">
                      <span className="text-purple-400">&lt;DashboardCard</span> <span className="text-yellow-300">title</span>="Users" <span className="text-yellow-300">icon</span>=&#123;UserIcon&#125;&gt;
                    </p>
                    <p className="pl-4">
                      <span className="text-purple-400">&lt;StatDisplay</span> <span className="text-yellow-300">value</span>="1,240" <span className="text-yellow-300">trend</span>="+5%" /&gt;
                    </p>
                    <p>
                      <span className="text-purple-400">&lt;/DashboardCard&gt;</span>
                    </p>
                  </div>

                  <div className="border-l-2 border-white/10 pl-4">
                    <h4 className="text-white font-semibold text-sm mb-1">The Result</h4>
                    <p className="text-muted text-sm">
                      Development speed increased by <strong>40%</strong> and UI consistency reached 100%. Updates to the primary color in the theme config instantly propagated to all buttons, charts, and navigations.
                    </p>
                  </div>
                </div>

                <button className="mt-8 text-white text-sm font-bold border-b border-primary pb-1 hover:text-primary transition-colors">
                  View Source Code &rarr;
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};