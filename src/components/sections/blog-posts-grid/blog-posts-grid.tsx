import { cn } from '@/base/utils/cn';
import { getAllBlogPosts } from '@/base/services/storyblok';
import { BlogPostCard } from '@/components/molecules/blog-post-card';

import type { BlogPostsGridProps } from './blog-posts-grid.types';

export default async function BlogPostsGrid({ title, className }: BlogPostsGridProps) {
  const posts = await getAllBlogPosts();

  return (
    <section className={cn(className, 'container flex w-full flex-col items-center gap-10 md:p-0')}>
      {title && <h1>{title}</h1>}
      {posts.length === 0 && (
        <div className="mb-14 flex min-h-[200px] w-full items-center justify-center text-center">
          <p>No posts have been added... yet.</p>
        </div>
      )}
      {posts.length > 0 && (
        <div className="mb-14 grid w-full gap-x-4 gap-y-6 md:grid-cols-2">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post.content} fullSlug={post.full_slug} />
          ))}
        </div>
      )}
    </section>
  );
}
