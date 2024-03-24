'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

import type { ToasterProps } from './toaster.types';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      closeButton
      richColors
      position="bottom-right"
      //   className="toaster group"
      //   toastOptions={{
      // classNames: {
      //   toast:
      //     'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
      //   description: 'group-[.toast]:text-muted-foreground',
      //   actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
      //   cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
      //   error: 'group-[.toast]:bg-destructive group-[.toast]:text-destructive-foreground',
      // },
      //   }}
      {...props}
    />
  );
};

export default Toaster;
