import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const NeonText = ({ 
  children, 
  className = '', 
  color = 'cyan', 
  intensity = 'medium',
  animate = true,
  glitch = false,
  ...props 
}) => {
  const colorClasses = {
    cyan: 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]',
    pink: 'text-pink-400 drop-shadow-[0_0_10px_rgba(244,114,182,0.8)]',
    green: 'text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]',
    purple: 'text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]',
    yellow: 'text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]',
    red: 'text-red-400 drop-shadow-[0_0_10px_rgba(248,113,113,0.8)]'
  };

  const intensityClasses = {
    low: 'drop-shadow-[0_0_5px_currentColor]',
    medium: 'drop-shadow-[0_0_10px_currentColor] drop-shadow-[0_0_20px_currentColor]',
    high: 'drop-shadow-[0_0_15px_currentColor] drop-shadow-[0_0_30px_currentColor] drop-shadow-[0_0_45px_currentColor]'
  };

  const glitchAnimation = {
    initial: { x: 0 },
    animate: {
      x: [0, -2, 2, -1, 1, 0],
      transition: {
        duration: 0.2,
        repeat: Infinity,
        repeatDelay: Math.random() * 3 + 2,
        ease: 'easeInOut'
      }
    }
  };

  const pulseAnimation = {
    initial: { opacity: 0.8 },
    animate: {
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  const baseClasses = cn(
    'font-bold tracking-wider select-none',
    colorClasses[color] || colorClasses.cyan,
    intensityClasses[intensity],
    className
  );

  if (!animate) {
    return (
      <span className={baseClasses} {...props}>
        {children}
      </span>
    );
  }

  return (
    <motion.span
      className={baseClasses}
      {...(glitch ? glitchAnimation : pulseAnimation)}
      {...props}
    >
      {children}
    </motion.span>
  );
};

export default NeonText;