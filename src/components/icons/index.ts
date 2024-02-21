import dynamic from 'next/dynamic';

export const iconsRegistry = {
  XTwitter: {
    title: 'XTwitter',
    component: dynamic(() => import(`./x-twitter`)),
  },
  LinkedIn: {
    title: 'LinkedIn',
    component: dynamic(() => import(`./linked-in`)),
  },
  GitHub: {
    title: 'GitHub',
    component: dynamic(() => import(`./github`)),
  },
};
