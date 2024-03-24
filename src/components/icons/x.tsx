import { IconBase, type IconComponent } from '@/components/elements/icon-base';

const X: IconComponent = (props) => (
  <IconBase
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </IconBase>
);

export default X;
