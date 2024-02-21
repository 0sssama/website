/* eslint-disable security/detect-object-injection */

import { iconsRegistry } from '@/components/icons';

import type { IconProps } from './icon.types';

export default function Icon({ variant, title, ...props }: IconProps) {
  const { component: IconComponent, title: defaultTitle } = iconsRegistry[variant] ?? {};

  if (!IconComponent) return null;

  return <IconComponent title={title ?? defaultTitle} role="img" {...props} />;
}
