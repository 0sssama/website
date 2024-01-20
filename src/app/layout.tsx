import { GlobalLayout } from '@/components/layouts/global-layout';
import '@/base/styles/globals.css';

export { metadata, viewport } from '@/base/config/metadata.config';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <GlobalLayout>{children}</GlobalLayout>;
}
