import type { ReactNode } from 'react';

import { initStoryblok } from '@/services/storyblok/api';

initStoryblok();

export default function StoryblokProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
