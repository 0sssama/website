import Link from 'next/link';
import Image from 'next/image';

import { nav } from '@/base/data/nav';
import { Container } from '@/components/layouts/container';
import { Button } from '@/components/ui/button';
import logo from '@/assets/images/logo.svg';
import { HOME_ROUTE } from '@/base/config/routes.config';

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 flex w-full items-center justify-center">
      <Container className="flex items-center justify-between py-4">
        <div className="flex-1">
          <Link href={HOME_ROUTE}>
            <Image src={logo} alt="Logo" width={42} height={39} />
          </Link>
        </div>
        <nav className="max-md:hidden">
          {nav.map((item, index) => (
            <Link key={index} href={item.path} className="p-4 text-sm mix-blend-difference hover:opacity-80">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <Button size="sm">Book a Call</Button>
        </div>
      </Container>
    </header>
  );
}
