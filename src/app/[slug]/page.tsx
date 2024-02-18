import { notFound, redirect } from 'next/navigation';

import { getPageBySlug } from '@/base/services/storyblok';
import { getPageMetadata } from '@/base/services/storyblok/utils/get-page-metadata';
import { PageBuilder } from '@/components/templates/page-builder';
import type { NextPageProps } from '@/base/types/next';

export default async function Page({ params }: NextPageProps) {
  if (params.slug === 'home') redirect('/');

  const page = await getPageBySlug(params.slug);

  if (!page) notFound();

  return (
    <main>
      <PageBuilder sections={page.sections ?? []} />
    </main>
  );
}

export async function generateMetadata({ params }: NextPageProps) {
  return getPageMetadata(params.slug);
}
