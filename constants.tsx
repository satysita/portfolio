import React from 'react';
import { NavItem, ExperienceItem, SkillItem, PortfolioItem } from './types';
import { Monitor, Layers, Zap, PenTool } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'React Skills', href: '#react-architecture' },
  { label: 'Experience', href: '#experience' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  { year: '2022 - Present', role: 'Senior React Developer', company: 'CodeGenius (USA)' },
  { year: '2020 - 2022', role: 'Frontend Engineer', company: 'TechFlow Solutions' },
  { year: '2018 - 2020', role: 'UI Designer', company: 'Creative Pulse' },
  { year: '2016 - 2018', role: 'Junior Web Dev', company: 'StartUp Inc.' },
];

export const EDUCATION_DATA: ExperienceItem[] = [
  { year: '2022 - Present', role: 'Advanced React Patterns', company: 'Frontend Masters' },
  { year: '2016 - 2020', role: 'B.S. Computer Science', company: 'University of Tech' },
  { year: '2015 - 2016', role: 'UI/UX Certification', company: 'Design Academy' },
];

export const DESIGN_SKILLS: SkillItem[] = [
  { name: 'Figma', percentage: 95 },
  { name: 'Adobe XD', percentage: 85 },
  { name: 'Photoshop', percentage: 80 },
];

export const DEV_SKILLS: SkillItem[] = [
  { name: 'React & TypeScript', percentage: 95 },
  { name: 'HTML5 & CSS3', percentage: 90 },
  { name: 'Tailwind CSS', percentage: 95 },
  { name: 'Node.js', percentage: 70 },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, title: 'SaaS Dashboard', category: 'Development', image: 'https://picsum.photos/600/400?random=1' },
  { id: 2, title: 'E-Commerce Platform', category: 'UI Design', image: 'https://picsum.photos/600/400?random=2' },
  { id: 3, title: 'Finance App', category: 'App Design', image: 'https://picsum.photos/600/400?random=3' },
  { id: 4, title: 'Travel Booking', category: 'Development', image: 'https://picsum.photos/600/400?random=4' },
];

export const SOCIAL_LINKS = {
  twitter: '#',
  linkedin: '#',
  github: '#',
  instagram: '#',
};