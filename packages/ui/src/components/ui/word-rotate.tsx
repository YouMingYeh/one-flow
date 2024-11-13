'use client';

import { useEffect, useState } from 'react';
import type { HTMLMotionProps } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface WordRotateProps {
  words: string[];
  duration?: number;
  framerProps?: HTMLMotionProps<'h1'>;
  className?: string;
}

export default function WordRotate({
  words,
  duration = 5000,
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => {
      clearInterval(interval);
    };
  }, [words, duration]);

  return (
    <div className='overflow-hidden py-2'>
      <AnimatePresence mode='wait'>
        <motion.h1
          className={cn(className)}
          key={words[index]}
          {...framerProps}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
