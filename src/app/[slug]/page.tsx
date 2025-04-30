import { notFound, redirect } from 'next/navigation';

import { getAllPages, getPageBySlug, getPageMetadata } from '@/base/services/storyblok';
import { PageBuilder } from '@/components/templates/page-builder';
import type { NextPageProps } from '@/base/types/next';

export default async function Page({ params }: NextPageProps) {
  const { slug } = await params;

  if (slug === 'home') redirect('/');

  const page = await getPageBySlug(slug);

  if (!page) notFound();

  return (
    <main className="flex flex-col gap-10">
      <PageBuilder sections={page.sections ?? []} />
    </main>
  );
}

export async function generateMetadata({ params }: NextPageProps) {
  const { slug } = await params;

  return await getPageMetadata(slug);
}

export async function generateStaticParams() {
  const pages = await getAllPages();

  return pages
    .map((page) => {
      if (page.slug === 'home') return;
      return {
        slug: page.slug,
      };
    })
    .filter(Boolean);
}
