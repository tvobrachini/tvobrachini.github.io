import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className = '', children }) => (
  <div className={`border border-alpine-stone bg-alpine-basalt p-8 print:break-inside-avoid ${className}`}>
    {children}
  </div>
);
