import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      serif: ['var(--font-cal-sans)', ...defaultTheme.fontFamily.sans],
      sans: ['var(--font-dm-sans)', ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
