import type { CallToActionProps } from './call-to-action.types';
import ListButtons from './components/list-buttons';

function CallToAction({ title, description, buttons }: CallToActionProps) {
  return (
    <section className="container flex flex-col pt-10 pb-20 md:items-center md:px-6 md:pb-24">
      {title && <h1 className="gradient-title mb-3 text-4xl md:mb-1 md:text-5xl md:leading-[75px]!">{title}</h1>}
      {description && <p className="mb-9 text-zinc-700">{description}</p>}
      <ListButtons buttons={buttons} />
    </section>
  );
}

export default CallToAction;
