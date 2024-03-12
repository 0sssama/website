import { notFound } from 'next/navigation';

import { getAllBlogPosts, getBlogPostBySlug } from '@/base/services/storyblok';
import { Markdown } from '@/components/organisms/markdown';
import type { NextPageProps } from '@/base/types/next';

export default async function BlogPost({ params }: NextPageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) notFound();

  return (
    <main className="w-full">
      <article className="container my-16">
        <Markdown content={post.content} />
      </article>
    </main>
  );
}

// export async function generateMetadata({ params }: NextPageProps) {
//   return await getPageMetadata(params.slug);
// }

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();

  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}
