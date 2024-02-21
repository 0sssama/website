import NewsletterForm from './components/newsletter-form';
import type { NewsletterCTAProps } from './newsletter-cta.types';

export default function NewsletterCTA({
  title,
  description,
  bottomNote,
  inputPlaceholder,
  buttonText,
}: NewsletterCTAProps) {
  return (
    <section className="max-lg:mx-4">
      <div className="pb-18 container relative flex flex-col overflow-hidden rounded-3xl bg-primary py-12 pb-6 drop-shadow-3xl md:items-center md:px-6">
        {title && (
          <h1 className="gradient-title-inverted mb-3 text-4xl md:mb-1 md:text-5xl md:!leading-[75px]">{title}</h1>
        )}
        {description && <p className="mb-6 text-zinc-500">{description}</p>}
        <NewsletterForm inputPlaceholder={inputPlaceholder} buttonText={buttonText} />
        {bottomNote && <p className="mt-6 text-center text-xs text-zinc-600 md:mt-14">{bottomNote}</p>}
        <div className="pointer-events-none absolute -top-20 bottom-0 left-0 right-0 z-[-1] rotate-180 bg-[linear-gradient(to_right,#a1a1aa_1px,transparent_1px),linear-gradient(to_bottom,#a1a1aa_1px,transparent_1px)] bg-[size:2.66rem_2.66rem] opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>
    </section>
  );
}
