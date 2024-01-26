// tailwind.config.ts
import type { Config } from 'tailwindcss';
import colors  from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      flex:{
        '2':'1 0 0'
      },
      colors: {
        's-green': '#98b192',
        'b-green':'#b7d1b1',
        'g-blue':'#cfedee',
        'h-blue':'#b4cecf',
        'g-grey':'#677777',
        'i-blue':'#ecf8f8',
        'm-pink':'#e2f4f5',
        't-black':'#262020',
        't-cream':'#81977c',
        tremor: {
          brand: {
            faint: colors.blue[50],
            muted: colors.blue[200],
            subtle: colors.blue[400],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[700],
            inverted: colors.white,
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: colors.white,
            emphasis: colors.gray[700],
          },
          border: {
            DEFAULT: colors.gray[200],
          },
          ring: {
            DEFAULT: colors.gray[200],
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white,
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
