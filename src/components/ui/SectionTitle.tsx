import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <motion.span 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="block text-primary uppercase tracking-[0.2em] text-sm font-semibold mb-3"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
      >
        {title}
      </motion.h2>
      <motion.div 
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`h-1 w-20 bg-primary mt-6 ${centered ? 'mx-auto' : ''}`} 
      />
    </div>
  );
};