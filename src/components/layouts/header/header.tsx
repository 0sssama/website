import Image from 'next/image';

import { HOME_ROUTE } from '@/base/config/routes.config';
import { Button } from '@/components/ui/button/button';
import { Link } from '@/components/atoms/link';
import logo from '@/assets/images/logo.svg';

import type { HeaderProps } from './header.types';

export default function Header({ navLinks, button }: HeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 flex w-full items-center justify-center">
      <div className="container flex items-center justify-between py-4">
        <div className="flex-1">
          <Link href={{ url: HOME_ROUTE }}>
            <Image src={logo} alt="Logo" width={42} height={39} />
          </Link>
        </div>
        <nav className="max-md:hidden">
          {navLinks.map((item, index) => (
            <Link key={index} href={item.href} className="p-4 text-sm mix-blend-difference hover:opacity-80">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <Button {...button?.[0]} />
        </div>
      </div>
    </header>
  );
}
