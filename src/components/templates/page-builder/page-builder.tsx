import { componentsRegistry } from '@/base/utils/components-registry';

import type { PageBuilderProps, PageSectionProps } from './page-builder.types';

function PageSection({ section }: PageSectionProps) {
  const Component = componentsRegistry[section.component] ?? null;

  if (!Component)
    return (
      <section className="container grid min-h-[400px] place-items-center text-center">
        <p>Section with name &apos;{section.component}&apos; doesn&apos;t exist</p>
      </section>
    );

  return <Component {...section} />;
}

export default function PageBuilder({ sections }: PageBuilderProps) {
  if (!Array.isArray(sections) || sections.length === 0) return null;

  return sections.map((section) => <PageSection key={section._uid} section={section} />);
}
