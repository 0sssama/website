import NewsletterForm from './components/newsletter-form';
import type { NewsletterCTAProps } from './newsletter-cta.types';

export default function NewsletterCTA({
  title,
  description,
  inputNote,
  inputPlaceholder,
  buttonText,
}: NewsletterCTAProps) {
  return (
    <section className="pb-18 container flex flex-col rounded-3xl bg-primary py-12 pb-16 drop-shadow-3xl md:items-center md:px-6">
      {title && (
        <h1 className="gradient-title-inverted mb-3 text-4xl md:mb-1 md:text-5xl md:!leading-[75px]">{title}</h1>
      )}
      {description && <p className="mb-6 text-zinc-800">{description}</p>}
      <NewsletterForm inputNote={inputNote} inputPlaceholder={inputPlaceholder} buttonText={buttonText} />
    </section>
  );
}
