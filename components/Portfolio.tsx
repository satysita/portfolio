import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { PORTFOLIO_ITEMS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const CATEGORIES = ['All', 'Development', 'UI Design', 'App Design', 'Branding'];

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-dark relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          subtitle="LATEST PORTFOLIO" 
          title="Transforming Ideas Into Exceptional UI"
          alignment="center"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'bg-[#1A1A1D] text-white hover:bg-[#252529]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative bg-card rounded-2xl overflow-hidden border border-white/5">
              {/* Image */}
              <div className="relative overflow-hidden h-72 w-full">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
                        <ArrowUpRight size={24} />
                     </button>
                   </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 relative z-10 bg-card">
                <div className="flex justify-between items-end">
                   <div>
                      <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">{item.category}</span>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.title}</h3>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};