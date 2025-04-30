'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

import type { ToasterProps } from './toaster.types';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return <Sonner theme={theme as ToasterProps['theme']} closeButton richColors position="bottom-right" {...props} />;
};

export default Toaster;
