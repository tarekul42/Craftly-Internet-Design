import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline';
  children: React.ReactNode;
}

import { useAuth } from '@/components/Auth';

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const { role } = useAuth();
  const baseStyles = "font-bold transition-all whitespace-nowrap flex items-center justify-center btn-radius";
  
  const variants = {
    primary: "border border-black dark:border-white px-6 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black bg-white text-black dark:bg-black dark:text-white",
    secondary: "border border-black/20 dark:border-white/20 px-6 py-3 hover:border-black dark:hover:border-white text-black dark:text-white",
    ghost: "px-4 py-2 opacity-50 hover:opacity-100 text-black dark:text-white",
    danger: "border-double border-4 border-black dark:border-white px-8 py-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black",
    outline: "border border-black dark:border-white px-8 py-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
  };

  const roleStyles = role === 'engineer' 
    ? "font-mono text-[11px] uppercase tracking-[0.3em]" 
    : "font-sans text-sm tracking-normal";

  return (
    <button 
      className={`${baseStyles} ${roleStyles} ${variants[variant]} ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
