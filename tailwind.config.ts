import type { Config } from 'tailwindcss'

import daisy from 'daisyui';

const colors = {
  /**
   * All colors defined:
   * https://uicolors.app/edit?sv1=tertiary?:50-ebfef7/100-d0fbea/200-a4f6d9/300-6aebc6/400-2fd8ac/500-0abf96/600-009476/700-007c66/800-036251/900-045044;success:50-f5faf3/100-e7f4e4/200-cfe9c9/300-a3d49a/400-79bb6d/500-569e49/600-428237/700-36672e/800-2e5229/900-274423;secondary:50-fcf3f8/100-f9eaf2/200-f5d5e5/300-eeb3d0/400-e383b0/500-d75d93/600-c33f74/700-a82e5b/800-8b294b/900-752642;tertiary?:50-fef9ec/100-fdedc8/200-fad98d/300-f7c152/400-f5a623/500-ef8611/600-d3640c/700-af440e/800-8f3511/900-752c12;neutral:50-f6f7f8/100-ebecee/200-dbdde2/300-c2c7ce/400-9ca3af/500-8e94a3/600-7d8293/700-707385/800-5e616f/900-4e505a;warning:50-fefde8/100-fffdc2/200-fff788/300-ffeb43/400-ffd910/500-efbf03/600-bc8700/700-a46a04/800-87520c/900-734310;error:50-fff1f1/100-ffdfdf/200-ffc4c4/300-ff9a9a/400-ff6060/500-ff2f2f/600-f21010/700-d40909/800-a90b0b/900-8b1111;primary:50-eefaff/100-dcf5ff/200-b2eeff/300-6de3ff/400-20d5ff/500-00c0ff/600-009bdf/700-007bb4/800-006894/900-005b82
   */
  transparent: 'transparent',
  white: '#FFFFFF',
  black: '#444444',
  neutral: {
    50: '#f6f7f8',
    100: '#ebecee',
    200: '#dbdde2',
    300: '#c2c7ce',
    400: '#9ca3af',
    500: '#8e94a3',
    600: '#7d8293',
    700: '#707385',
    800: '#5e616f',
    900: '#4e505a',
  },
  primary: {
    50: '#eefaff',
    100: '#dcf5ff',
    200: '#b2eeff',
    300: '#6de3ff',
    400: '#20d5ff',
    500: '#00c0ff',
    600: '#009bdf',
    700: '#007bb4',
    800: '#006894',
    900: '#005b82',
  },
  secondary: {
    50: '#fcf3f8',
    100: '#f9eaf2',
    200: '#f5d5e5',
    300: '#eeb3d0',
    400: '#e383b0',
    500: '#d75d93',
    600: '#c33f74',
    700: '#a82e5b',
    800: '#8b294b',
    900: '#752642',
  },
  accent: {
    50: '#fef9ec',
    100: '#fdedc8',
    200: '#fad98d',
    300: '#f7c152',
    400: '#f5a623',
    500: '#ef8611',
    600: '#d3640c',
    700: '#af440e',
    800: '#8f3511',
    900: '#752c12',
  },
  success: {
    50: '#f5faf3',
    100: '#e7f4e4',
    200: '#cfe9c9',
    300: '#a3d49a',
    400: '#79bb6d',
    500: '#569e49',
    600: '#428237',
    700: '#36672e',
    800: '#2e5229',
    900: '#274423',
  },
  warning: {
    50: '#fefde8',
    100: '#fffdc2',
    200: '#fff788',
    300: '#ffeb43',
    400: '#ffd910',
    500: '#efbf03',
    600: '#bc8700',
    700: '#a46a04',
    800: '#87520c',
    900: '#734310',
  },
  error: {
    50: '#fff1f1',
    100: '#ffdfdf',
    200: '#ffc4c4',
    300: '#ff9a9a',
    400: '#ff6060',
    500: '#ff2f2f',
    600: '#f21010',
    700: '#d40909',
    800: '#a90b0b',
    900: '#8b1111',
  },
};


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:colors,
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    logs: false,
    themes: [
      {
        visited: {
          primary: colors.primary['600'],
          accent: colors.accent['600'],
          secondary: colors.secondary['500'],
          success: colors.success['600'],
          warning: colors.warning['600'],
          error: colors.error['600'],
          info: colors.primary['600'],
          neutral: colors.neutral['600'],
          'base-100': colors.white,
        },
      },
    ],
    prefix: '',
  },
  plugins: [
      daisy
  ],
}
export default config
