import localFont from 'next/font/local';

export const calSansFont = localFont({
  variable: '--font-calSans',
  src: '../../assets/fonts/calsans/CalSans-SemiBold.otf',
});

export const satoshiFont = localFont({
  variable: '--font-satoshi',
  src: [
    {
      path: '../../assets/fonts/satoshi/Satoshi-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/satoshi/Satoshi-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../assets/fonts/satoshi/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/satoshi/Satoshi-italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../assets/fonts/satoshi/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/satoshi/Satoshi-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../assets/fonts/satoshi/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/satoshi/Satoshi-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../assets/fonts/satoshi/Satoshi-Black.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/satoshi/Satoshi-BlackItalic.otf',
      weight: '800',
      style: 'italic',
    },
  ],
});
