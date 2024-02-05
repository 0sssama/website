'use client';

import type { Transition } from 'framer-motion';
import { motion } from 'framer-motion';

import { cn } from '@/base/utils/cn';
import { Button } from '@/components/ui/button';
import { Markdown } from '@/components/organisms/markdown';

import type { HeroProps } from './hero.types';

export default function Hero({ heading, description, buttons, className }: HeroProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={cn('container flex flex-col items-center justify-center py-28 md:py-40 md:text-center', className)}
    >
      <motion.h1
        variants={item}
        transition={transition}
        className="gradient-title text-4xl md:text-6xl md:!leading-[75px]"
      >
        {heading}
      </motion.h1>
      <motion.div variants={item} transition={transition} className="mb-8 mt-6 md:max-w-[75%]">
        <Markdown className="font-light !leading-none *:text-base *:!text-zinc-300" content={description} />
      </motion.div>
      <motion.div
        variants={item}
        transition={transition}
        className="flex w-full items-center gap-2 md:justify-center md:gap-4"
      >
        {Array.isArray(buttons) && buttons.map((button, index) => <Button key={index} {...button} />)}
      </motion.div>
    </motion.div>
  );
}

const transition: Transition = {
  duration: 1,
  ease: [0.59, 0, 0.06, 1],
};

const container = {
  hidden: {
    opacity: 0,
    // y: 30,
  },
  visible: {
    opacity: 1,
    // y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: {
    // y: 15,
    opacity: 0,
  },
  visible: {
    // y: 0,
    opacity: 1,
    transition,
  },
};
