import type { ComponentProps, ComponentType } from 'react';

import type { iconsRegistry } from '@/components/icons';

export interface IconBaseProps extends ComponentProps<'svg'> {
  title?: string;
}

export type IconComponent = ComponentType<IconBaseProps>;

export interface Icon {
  title: string;
  component: IconComponent;
}

export type IconVariant = keyof typeof iconsRegistry;
