import { IconBase, type IconComponent } from '@/components/atoms/icon-base';

const Check: IconComponent = (props) => (
  <IconBase
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M20 6 9 17l-5-5" />
  </IconBase>
);

export default Check;
