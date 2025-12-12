import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Briefcase, GraduationCap } from 'lucide-react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../constants';
import { ExperienceItem, SkillItem } from '../types';
import { DESIGN_SKILLS, DEV_SKILLS } from '../constants';

const ResumeCard: React.FC<{ item: ExperienceItem }> = ({ item }) => (
  <div className="bg-card p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all hover:bg-[#222226] group">
    <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">{item.year}</span>
    <h3 className="text-xl font-bold text-white uppercase mb-1 group-hover:text-primary transition-colors">{item.role}</h3>
    <p className="text-muted text-sm">{item.company}</p>
  </div>
);

const SkillBar: React.FC<{ skill: SkillItem }> = ({ skill }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-white font-bold text-sm uppercase">{skill.name}</span>
      <span className="text-muted text-sm">{skill.percentage}%</span>
    </div>
    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
      <div 
        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${skill.percentage}%` }}
      ></div>
    </div>
  </div>
);

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        
        {/* Experience & Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-primary" size={24} />
              <h3 className="text-2xl font-bold text-white">My Experience</h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {EXPERIENCE_DATA.map((item, index) => (
                <ResumeCard key={index} item={item} />
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary" size={24} />
              <h3 className="text-2xl font-bold text-white">My Education</h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {EDUCATION_DATA.map((item, index) => (
                <ResumeCard key={index} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4 inline-block pr-12">
              Design Skills
            </h3>
            {DESIGN_SKILLS.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>

          <div>
             <h3 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4 inline-block pr-12">
              Development Skills
            </h3>
            {DEV_SKILLS.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};