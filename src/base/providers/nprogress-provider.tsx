'use client';

import { AppProgressBar } from 'next-nprogress-bar';
import type { ReactNode } from 'react';

export default function NprogressProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <AppProgressBar height="2px" color="#fafafa" options={{ showSpinner: true }} shallowRouting />
      {children}
    </>
  );
}
