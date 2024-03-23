'use client';

import Image from 'next/image';

import { HOME_ROUTE } from '@/base/config/routes.config';
import { Button } from '@/components/elements/button';
import { Link } from '@/components/elements/link';
import { useScroll } from '@/base/hooks/use-scroll';
import { cn } from '@/base/utils/cn';
import logo from '@/assets/images/logo.svg';

import type { HeaderProps } from './header.types';

export default function Header({ navLinks, button }: HeaderProps) {
  const { isScrolled } = useScroll({ threshold: 20 });

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-4 z-50 flex w-full items-center justify-center lg:top-6',
        isScrolled && 'px-2',
      )}
    >
      <div
        className={cn(
          'container flex items-center justify-between rounded-full border border-transparent py-3',
          isScrolled && 'border-border bg-background/85 backdrop-blur',
        )}
      >
        <div className="flex-1">
          <Link href={{ url: HOME_ROUTE }} className="hover:opacity-80">
            <Image src={logo} alt="Labrahmi Logo" width={42} height={39} className="pointer-events-none" priority />
          </Link>
        </div>
        <nav className="max-md:hidden">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={{ url: `/${item.href?.cached_url}` }}
              className="p-3 text-sm mix-blend-difference hover:opacity-80"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end">
          {Array.isArray(button) && button.length > 0 && <Button {...button[0]} />}
        </div>
      </div>
    </header>
  );
}
