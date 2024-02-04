import { notFound } from 'next/navigation';

import { getPageBySlug } from '@/base/services/storyblok';
import { PageBuilder } from '@/components/templates/page-builder';
import { getPageMetadata } from '@/base/services/storyblok/utils/get-page-metadata';
import { Container } from '@/components/layouts/container';

export default async function HomePage() {
  const page = await getPageBySlug('home');

  if (!page) notFound();

  return (
    <Container as="main" className="py-36 text-center">
      <PageBuilder sections={page.sections ?? []} />
    </Container>
  );
}

export async function generateMetadata() {
  return getPageMetadata('home');
}
