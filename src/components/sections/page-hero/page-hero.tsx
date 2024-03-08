import type { PageHeroProps } from './page-hero.types';

export default function PageHeroSection({
  title,
  description,
  // buttons
}: PageHeroProps) {
  return (
    <section className="relative w-full">
      <h1>{title}</h1>
      <h3>{description}</h3>
    </section>
  );
}
