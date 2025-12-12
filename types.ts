import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
}

export interface SkillItem {
  name: string;
  percentage: number;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface ReactConcept {
  title: string;
  description: string;
  icon: React.ReactNode;
}