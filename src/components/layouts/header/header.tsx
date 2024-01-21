import Link from 'next/link';

import { nav } from '@/base/data/nav';
import { Container } from '@/components/layouts/container';

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 flex w-full items-center justify-center bg-zinc-900/75 backdrop-blur-md">
      <Container as="nav" className="flex items-center justify-center">
        {nav.map((item, index) => (
          <Link key={index} href={item.path} className="p-4 text-sm hover:opacity-80">
            {item.label}
          </Link>
        ))}
      </Container>
    </header>
  );
}
