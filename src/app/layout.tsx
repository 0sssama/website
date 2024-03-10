import { GlobalLayout } from '@/components/layouts/global-layout';
import '@/base/styles/globals.css';
import { getPageBySlug } from '@/base/services/storyblok';

export { metadata, viewport } from '@/base/config/metadata.config';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const layout = await getPageBySlug('layout');

  const header = layout?.header?.[0];
  const footer = layout?.footer?.[0];

  return (
    <GlobalLayout header={header} footer={footer}>
      {children}
    </GlobalLayout>
  );
}
