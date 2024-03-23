import dynamic from 'next/dynamic';
import type { ComponentType as ReactComponentType } from 'react';

import type { MarkdownProps } from '@/components/molecules/markdown';
import type { HeroProps } from '@/components/sections/hero';
import type { NewsletterCTAProps } from '@/components/sections/newsletter-cta';
import type { CallToActionProps } from '@/components/sections/call-to-action';
import type { PageHeroProps } from '@/components/sections/page-hero';
import type { BlogPostsGridProps } from '@/components/sections/blog-posts-grid';

export const componentsRegistry: Record<string, ReactComponentType<ComponentProps>> = {
  // MOLECULES
  markdown: dynamic(() => import('@/components/molecules/markdown/markdown')),

  // SECTIONS
  hero: dynamic(() => import('@/components/sections/hero/hero')),
  page_hero: dynamic(() => import('@/components/sections/page-hero/page-hero')),
  newsletter_cta: dynamic(() => import('@/components/sections/newsletter-cta/newsletter-cta')),
  call_to_action: dynamic(() => import('@/components/sections/call-to-action/call-to-action')),
  blog_posts_grid: dynamic(() => import('@/components/sections/blog-posts-grid/blog-posts-grid')),
};

export type ComponentType = keyof typeof componentsRegistry;

export type ComponentProps = MarkdownProps &
  HeroProps &
  PageHeroProps &
  NewsletterCTAProps &
  CallToActionProps &
  BlogPostsGridProps;
