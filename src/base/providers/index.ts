import dynamic from 'next/dynamic';

export { default as StoryblokProvider } from './storyblok-provider';

export const NprogressProvider = dynamic(() => import('./nprogress-provider'), { ssr: false });
