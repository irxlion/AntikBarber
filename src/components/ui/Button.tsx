import React from 'react';
import { cn } from '@/lib/cn';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}) => {
  const variants = {
    primary: "bg-primary text-black hover:bg-white hover:text-black border border-transparent",
    outline: "bg-transparent border border-white text-white hover:bg-white hover:text-black",
    ghost: "bg-transparent text-white hover:text-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg uppercase tracking-widest",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative overflow-hidden rounded-none font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};