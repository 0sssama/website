import { notFound } from 'next/navigation';

import { getPageBySlug } from '@/base/services/storyblok';
import { PageBuilder } from '@/components/templates/page-builder';

export default async function HomePage() {
  const page = await getPageBySlug('home');

  if (!page) notFound();

  return (
    <div>
      <h1>Home</h1>
      <PageBuilder sections={page.sections} />
    </div>
  );
}
