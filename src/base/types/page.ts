import type { ISbStoryData } from '@/base/services/storyblok';
import type { ComponentProps, ComponentType } from '@/base/utils/components-registry';

export interface SectionModel extends ComponentProps, Omit<ISbStoryData, 'component'> {
  component: ComponentType;
}
