import type { ReactNode } from 'react';

import { initStoryblok } from '@/base/services/storyblok/api';

initStoryblok();

export default function StoryblokProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
