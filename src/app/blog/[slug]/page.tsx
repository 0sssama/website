import { notFound } from 'next/navigation';

import { getAllBlogPosts, getBlogPostBySlug } from '@/base/services/storyblok';
import type { NextPageProps } from '@/base/types/next';

export default async function BlogPost({ params }: NextPageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) notFound();

  return (
    <main className="container flex flex-col items-center justify-center py-40">
      <h1>{post.title}</h1>
      <p>{post.excerpt}</p>
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
      slug: `blog/${post.slug}`,
    };
  });
}
