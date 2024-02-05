'use client';

import Image from 'next/image';
import type { Transition } from 'framer-motion';
import { motion } from 'framer-motion';

import { HOME_ROUTE } from '@/base/config/routes.config';
import { Button } from '@/components/ui/button/button';
import { Link } from '@/components/atoms/link';
import logo from '@/assets/images/logo.svg';

import type { HeaderProps } from './header.types';

export default function Header({ navLinks, button }: HeaderProps) {
  return (
    <motion.header
      variants={container}
      initial="hidden"
      animate="visible"
      className="fixed left-0 right-0 top-4 z-10 flex w-full items-center justify-center px-4 lg:top-6 lg:px-0"
    >
      <div className="container flex items-center justify-between rounded-full border border-border bg-background/25 py-[10px] backdrop-blur-md">
        <div className="flex-1">
          <Link href={{ url: HOME_ROUTE }} className="hover:opacity-80 [&>img]:pointer-events-none">
            <Image src={logo} alt="Logo" width={42} height={39} />
          </Link>
        </div>
        <nav className="max-md:hidden">
          {navLinks.map((item, index) => (
            <Link key={index} href={item.href} className="p-3 text-sm mix-blend-difference hover:opacity-80">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <Button {...button?.[0]} />
        </div>
      </div>
    </motion.header>
  );
}

const transition: Transition = {
  delay: 1,
  duration: 1,
  ease: [0.59, 0, 0.06, 1],
};

const container = {
  hidden: {
    opacity: 0,
    // y: -60,
  },
  visible: {
    opacity: 1,
    // y: 0,
    transition: {
      ...transition,
    },
  },
};
