import type { SectionModel } from '@/base/types/page';
import type { HeaderModel } from '@/components/layouts/header';

export interface ISbStoryData {
  _uid: string;
  _editable: string;
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
  component: 'page' | 'layout';
}
