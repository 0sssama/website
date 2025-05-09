'use client';

import Image from 'next/image';

import { HOME_ROUTE } from '@/base/config/routes.config';
import { Button } from '@/components/elements/button';
import { Link } from '@/components/elements/link';
import { useScroll } from '@/hooks/use-scroll';
import { cn } from '@/utils/cn';
import logo from '@/assets/images/logo.svg';

import type { HeaderProps } from './header.types';

export default function Header({ navLinks, button }: HeaderProps) {
  const { isScrolled } = useScroll({ threshold: 20 });

  return (
    <header
      className={cn(
        'fixed top-4 right-0 left-0 z-50 flex w-full items-center justify-center lg:top-6',
        isScrolled && 'px-1',
      )}
    >
      <div
        className={cn(
          'container flex items-center justify-between rounded-full border border-transparent py-2',
          isScrolled && 'max-w-[920px] border-zinc-200 bg-zinc-50/75 backdrop-blur-sm',
        )}
      >
        <div className="flex-1">
          <Link href={{ url: HOME_ROUTE }} className="flex w-fit hover:opacity-80">
            <Image src={logo} alt="Labrahmi Logo" width={42} height={39} className="pointer-events-none" priority />
          </Link>
        </div>
        <nav className="max-md:hidden">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={{ url: `/${item.href?.cached_url}` }}
              className="p-3 text-sm text-zinc-900 hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end">
          {Array.isArray(button) && button.length > 0 && (
            <Button
              {...button[0]}
              variant={isScrolled ? 'accent' : 'outline'}
              className={cn(!isScrolled && 'border-zinc-200 bg-white/60')}
            />
          )}
        </div>
      </div>
    </header>
  );
}
