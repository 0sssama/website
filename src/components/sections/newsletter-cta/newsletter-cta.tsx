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
      <div className="bg-primary drop-shadow-3xl relative container flex flex-col overflow-hidden rounded-3xl py-12 pb-6 pb-18 md:items-center md:px-6">
        {title && (
          <h1 className="gradient-title-inverted mb-3 text-4xl md:mb-1 md:text-center md:text-5xl md:leading-[75px]!">
            {title}
          </h1>
        )}
        {description && <p className="mb-6 text-zinc-600 md:max-w-[60%] md:text-center">{description}</p>}
        <NewsletterForm inputPlaceholder={inputPlaceholder} buttonText={buttonText} />
        {bottomNote && <p className="mt-6 text-center text-xs text-zinc-600 md:mt-14">{bottomNote}</p>}
        <div className="pointer-events-none absolute -top-20 right-0 bottom-0 left-0 z-[-1] rotate-180 bg-[linear-gradient(to_right,#a1a1aa_1px,transparent_1px),linear-gradient(to_bottom,#a1a1aa_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:2.66rem_2.66rem] opacity-20" />
      </div>
    </section>
  );
}
