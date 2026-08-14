import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  style = {},
}) => {
  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  
  return (
    <button
      type={type}
      className={classes}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
