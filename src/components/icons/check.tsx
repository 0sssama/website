import { IconBase, type IconComponent } from '@/components/elements/icon-base';

const Check: IconComponent = (props) => (
  <IconBase width="256" height="256" viewBox="0 0 256 256" fill="none" stroke="currentColor" {...props}>
    <polyline
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
      points="216 72.005 104 184 48 128.005"
    ></polyline>
  </IconBase>
);

export default Check;
