import React from 'react';
import { JetBrains_Mono } from 'next/font/google';

const mono = JetBrains_Mono({ subsets: ['latin'] });

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = `${mono.className} text-[10px] uppercase tracking-[0.3em] font-bold transition-all whitespace-nowrap flex items-center justify-center`;
  
  const variants = {
    primary: "border border-black dark:border-white px-6 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black bg-white text-black dark:bg-black dark:text-white",
    secondary: "border border-black/20 dark:border-white/20 px-6 py-3 hover:border-black dark:hover:border-white text-black dark:text-white",
    ghost: "px-4 py-2 opacity-50 hover:opacity-100 text-black dark:text-white",
    danger: "bg-red-500 text-black px-8 py-4 hover:bg-red-400"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
