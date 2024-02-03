import type { SectionModel } from '@/base/types/page';

export interface ISbStoryData {
  _uid: string;
  _editable: string;
}

export interface SeoModel extends ISbStoryData {
  title: string;
  description: string;
  component: 'seo';
}

export interface SbPageData extends ISbStoryData {
  seo: SeoModel[];
  sections: SectionModel[];
  component: 'page';
}
