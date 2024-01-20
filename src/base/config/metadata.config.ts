import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Home / Labrahmi',
  description: 'Turning ideas into seamless and blazing-fast products.',
  applicationName: 'Labrahmi.me',
  authors: [{ name: 'XO Software', url: 'https://www.xo.software/' }],
  keywords: [
    'software',
    'nextjs',
    'react',
    'typescript',
    'tailwindcss',
    'frontend',
    'fullstack',
    'web',
    'development',
    'javascript',
  ],
  robots: 'index, follow',
  themeColor: '#000000',
  openGraph: {
    type: 'website',
    url: 'https://labrahmi.me/',
    title: 'Home / Labrahmi',
    description: 'Turning ideas into seamless and blazing-fast products.',
    images: [
      {
        url: '/images/og-image.jpg',
        alt: 'Labrahmi.me',
        type: 'image/jpeg',
        width: 1200,
        height: 630,
      },
    ],
  },
};
