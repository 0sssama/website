import Link from 'next/link';

import { Container } from '@/components/layouts/container';

export default function NotFound() {
  return (
    <main className="w-full">
      <Container className="prose flex min-h-[100vh] flex-col items-center justify-center lg:prose-xl dark:prose-invert">
        <h1>404: Page not found.</h1>
        <Link href="/" className="underline hover:opacity-80">
          &larr; Go back home
        </Link>
      </Container>
    </main>
  );
}
