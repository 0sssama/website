import { getPageBySlug } from '@/base/services/storyblok';
import { PageBuilder } from '@/components/templates/page-builder';

export default async function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const layout = await getPageBySlug('blog/layout');

  return (
    <>
      <div className="w-full">{children}</div>
      <div className="w-full pb-12">
        <PageBuilder sections={layout?.sections ?? []} />
      </div>
    </>
  );
}
