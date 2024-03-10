import type { ReactNode } from 'react';

import type { HeaderModel } from '../header';
import type { FooterModel } from '../footer';

export interface GlobalLayoutProps {
  children: ReactNode;
  header?: HeaderModel;
  footer?: FooterModel;
}
