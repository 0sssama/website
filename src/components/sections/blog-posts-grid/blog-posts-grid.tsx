import { cn } from '@/base/utils/cn';
import { getAllBlogPosts } from '@/base/services/storyblok';
import { Link } from '@/components/atoms/link';

import type { BlogPostsGridProps } from './blog-posts-grid.types';

export default async function BlogPostsGrid({ title, className }: BlogPostsGridProps) {
  const posts = await getAllBlogPosts();

  return (
    <section className={cn(className, 'container flex flex-col items-center gap-10')}>
      {title && <h1>{title}</h1>}
      <div className="grid w-full grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col gap-4 rounded border border-border p-4 hover:bg-zinc-900"
            href={{ url: `/${post.full_slug}` }}
          >
            <h2>{post.content.title}</h2>
            <p className="line-clamp-3">{post.content.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
