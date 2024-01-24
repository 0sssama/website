import { Container } from '@/components/layouts/container';

import type { HomeProps } from './home.types';

export default function Home({ className }: HomeProps) {
  return (
    <Container className={className}>
      <h1>Hello World</h1>
      <p>I create products.</p>
    </Container>
  );
}
