import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#18181b',
};

export const metadata: Metadata = {
  title: 'Home / Labrahmi',
  description: 'Turning ideas into seamless and blazing-fast products.',
  applicationName: 'Labrahmi.me',
  metadataBase: new URL('https://new.labrahmi.me'),
  authors: [{ name: 'XO Software', url: 'https://www.xo.software/' }],
  alternates: {
    canonical: '/',
  },
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
  openGraph: {
    type: 'website',
    url: 'https://new.labrahmi.me/',
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
