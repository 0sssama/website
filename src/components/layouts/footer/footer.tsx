import Image from 'next/image';

import { Link } from '@/components/elements/link';
import { HOME_ROUTE } from '@/base/config/routes.config';
import { SocialMediaLink } from '@/components/molecules/social-media-link';
import logo from '@/assets/images/logo.svg';

import LocalTime from './components/local-time';
import type { FooterProps } from './footer.types';

export default function Footer({ description, copyrightText, includeLocalTime, socialMediaLinks }: FooterProps) {
  return (
    <footer className="container relative flex w-full flex-col items-center overflow-hidden border border-b-0 border-t-0 border-zinc-900 py-16 max-md:border-0 md:rounded-t-xl md:px-8">
      <div className="flex w-full flex-col items-center md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col max-md:mb-8 max-md:items-center">
          <Link href={{ url: HOME_ROUTE }} className="mb-4 hover:opacity-80">
            <Image src={logo} alt="Labrahmi Logo" width={42} height={39} className="pointer-events-none" />
          </Link>
          {description && (
            <p className="max-w-[240px] text-sm font-medium text-zinc-400 max-md:text-center">{description}</p>
          )}
        </div>
        <div className="flex flex-col items-center md:items-end">
          <div className="mb-4 flex items-center gap-2">
            {Array.isArray(socialMediaLinks) &&
              socialMediaLinks.map((link, index) => <SocialMediaLink {...link} key={index} />)}
          </div>
          {includeLocalTime && <LocalTime />}
        </div>
      </div>
      {copyrightText && (
        <p className="mt-16 text-center text-xs text-zinc-500 md:text-right">
          &copy; {new Date().getFullYear()} {copyrightText}
        </p>
      )}
      <div className="pointer-events-none absolute -bottom-20 left-0 right-0 top-0 z-[-1] bg-[linear-gradient(to_right,#fafafa_1px,transparent_1px),linear-gradient(to_bottom,#fafafa_1px,transparent_1px)] bg-[size:2.66rem_2.66rem] opacity-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </footer>
  );
}
