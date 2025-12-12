import React from 'react';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  alignment?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ subtitle, title, alignment = 'left' }) => {
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
    </div>
  );
};