import type { CallToActionProps } from './call-to-action.types';
import ListButtons from './components/list-buttons';

function CallToAction({ title, description, buttons }: CallToActionProps) {
  return (
    <section className="container flex flex-col py-12 md:items-center md:px-6">
      {title && <h1 className="gradient-title mb-3 text-4xl md:mb-1 md:text-5xl md:!leading-[75px]">{title}</h1>}
      {description && <p className="mb-10 text-zinc-200">{description}</p>}
      <ListButtons buttons={buttons} />
    </section>
  );
}

export default CallToAction;
