import { notFound } from 'next/navigation';

import { getAllBlogPosts, getBlogPostBySlug, getBlogPostMetadata } from '@/base/services/storyblok';
import { Markdown } from '@/components/organisms/markdown';
import { BlogPostHero } from '@/components/sections/blog-post-hero';
import type { NextPageProps } from '@/base/types/next';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default async function BlogPost({ params }: NextPageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) notFound();

  // submit that the post was viewed to a small db

  return (
    <>
      <BlogPostHero post={post} createdAt={post.createdAt} />
      <article className="container relative my-16">
        <Markdown content={post.content} />
      </article>
      <div className="relative">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button>Hello</button>
            </TooltipTrigger>
            <TooltipContent side="bottom" align="center">
              <p>hello world</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
}

export async function generateMetadata({ params }: NextPageProps) {
  return await getBlogPostMetadata(params.slug);
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();

  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}
