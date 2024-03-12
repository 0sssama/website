import type { ISbStoryData } from '@storyblok/react';

import type { SectionModel } from '@/base/types/page';
import type { FooterModel } from '@/components/layouts/footer';
import type { HeaderModel } from '@/components/layouts/header';
import type { ImageModel } from '@/base/types/image';

export interface SbStoryData<T> extends ISbStoryData<T> {
  _uid: string;
  _editable: string;
  component: 'page' | 'layout' | 'blog_post';
}

export interface SeoModel {
  title?: string;
  description?: string;
  noIndex?: boolean;
  ogType?: 'website' | 'article';
}

export interface SbPageData {
  seo?: SeoModel[];
  sections?: SectionModel[];
  header?: HeaderModel[];
  footer?: FooterModel[];
  component: 'page' | 'layout';
}

export interface SbBlogPostData {
  component: 'blog_post';
  title?: string;
  excerpt?: string;
  image?: ImageModel;
  content?: string;
}
