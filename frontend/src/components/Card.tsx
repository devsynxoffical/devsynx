import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  padding = 'md',
}) => {
  const baseClasses = 'card';
  const hoverClasses = hover ? 'cursor-pointer' : '';
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const classes = `${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`;
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
};
