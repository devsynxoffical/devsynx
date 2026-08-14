import React from 'react';

interface IconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  accent?: boolean;
  style?: React.CSSProperties;
}

export const icons = {
  // Web Development
  'web': (
    <>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </>
  ),
  // Mobile Apps
  'mobile': (
    <>
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
      <path d="M12 18h.01"/>
    </>
  ),
  // UI/UX Design
  'design': (
    <>
      <rect width="20" height="14" x="2" y="3" rx="2"/>
      <path d="M8 21l4-7 4 7"/>
    </>
  ),
  // Cloud & DevOps
  'cloud': (
    <>
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </>
  ),
  // Data & Analytics
  'analytics': (
    <>
      <path d="M3 3v18h18"/>
      <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
    </>
  ),
  // Digital Marketing
  'marketing': (
    <>
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
      <path d="M9 9h.01"/>
      <path d="M15 9h.01"/>
    </>
  ),
  // CRM & SaaS
  'crm': (
    <>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </>
  ),
  // Cybersecurity
  'security': (
    <>
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </>
  ),
  // E-commerce
  'ecommerce': (
    <>
      <circle cx="9" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </>
  ),
  // API & Integrations
  'api': (
    <>
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
      <path d="M16 6l-4-4-4 4"/>
      <path d="M12 2v13"/>
    </>
  ),
  // AI Agent
  'ai': (
    <>
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </>
  ),
  // Arrow Right
  'arrow-right': (
    <>
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </>
  ),
  // Check
  'check': (
    <>
      <path d="M20 6L9 17l-5-5"/>
    </>
  ),
  // Phone
  'phone': (
    <>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </>
  ),
  // Email
  'email': (
    <>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <path d="M22 6L12 13 2 6"/>
    </>
  ),
  // Location
  'location': (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </>
  ),
  // Menu
  'menu': (
    <>
      <path d="M3 12h18M3 6h18M3 18h18"/>
    </>
  ),
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  className = '',
  accent = false,
  style = {},
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };
  
  const strokeColor = accent ? 'text-brand-yellow-orange' : 'text-brand-teal';
  
  const classes = `${sizeClasses[size]} ${strokeColor} ${className}`;
  
  const iconPath = icons[name as keyof typeof icons];
  
  if (!iconPath) {
    return null;
  }
  
  return (
    <svg
      className={classes}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      {iconPath}
    </svg>
  );
};
