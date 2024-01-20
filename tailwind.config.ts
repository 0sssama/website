import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        calSans: ['var(--font-calSans)', ...defaultTheme.fontFamily.sans],
        satoshi: ['var(--font-satoshi)', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
export default config;
