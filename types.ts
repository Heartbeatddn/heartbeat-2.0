
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  // Fix: Added React import above to define React namespace
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}
