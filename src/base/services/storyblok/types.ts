import type { SectionModel } from '@/base/types/page';
import type { FooterModel } from '@/components/layouts/footer';
import type { HeaderModel } from '@/components/layouts/header';

export interface ISbStoryData {
  _uid: string;
  _editable: string;
  component: 'page' | 'layout' | 'blog_post';
}

export interface SeoModel extends ISbStoryData {
  title?: string;
  description?: string;
  noIndex?: boolean;
  ogType?: 'website' | 'article';
}

export interface SbPageData extends ISbStoryData {
  seo?: SeoModel[];
  sections?: SectionModel[];
  header?: HeaderModel[];
  footer?: FooterModel[];
  component: 'page' | 'layout';
}

export interface SbBlogPostData extends ISbStoryData {
  component: 'blog_post';
  title?: string;
  excerpt?: string;
}
