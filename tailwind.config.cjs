/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts,css}'],
  theme: {
    /** Extended these chunks */
    extend: {
      width: {
        'large-modal': '736px'
      },
      dropShadow: {
        'general-shadow': ['1px 1px 6px rgba(0, 0, 0, 0.03)', '4px 6px 30px rgba(0, 0, 0, 0.12)'],
        card: ['2px 2px 8px rgba(0, 0, 0, 0.02)', '4px 6px 20px rgba(0, 0, 0, 0.12)']
      },
      backgroundImage: {
        'auth-button': 'linear-gradient(261.34deg, #e73b8d 3.07%, #b15be5 49.61%, #438cfd 98.58%)'
      },
      boxShadow: {
        card: ['2px 2px 8px rgba(0, 0, 0, 0.02)', '4px 6px 20px rgba(0, 0, 0, 0.12)'],
        'card-hover': ['2px 2px 8px rgba(0, 0, 0, 0.025)', ' 4px 6px 30px rgba(0, 0, 0, 0.18);'],
        general: ['1px 1px 6px rgba(0, 0, 0, 0.03)', '4px 6px 30px rgba(0, 0, 0, 0.12)'],
        dashboard: [
          '6px 6px 25px rgba(0, 0, 0, 0.08)',
          'inset 1px 1px 4px rgba(255, 255, 255, 0.2)'
        ],
        basic: ['0px 1px 4px 0px rgba(0, 0, 0, 0.04)', '0px 3px 8px 0px rgba(0, 0, 0, 0.08)'],
        'segment-option': [
          '0px 1px 4px 0px rgba(0, 0, 0, 0.12)',
          '0px 0px 1px 0px rgba(0, 0, 0, 0.15)'
        ]
      },
      fontSize: {
        minute: '0.375rem',
        veryTiny: '0.5rem',
        tiny: '0.625rem',
        big: '2rem'
      },
      fontFamily: {
        /** Added for backwards compatibility */
        'lato-extrabold': 'Lato-ExtraBold',
        'lato-semibold': 'Lato-Semibold',
        'lato-bold': 'Lato-Bold',
        'lato-medium': 'Lato-Medium',
        'lato-regular': 'Lato-Regular',
        'lato-black': 'Lato-Black',
        'lato-light': 'Lato-Light',
        sans: ['Inter', 'sans-serif']
      },
      borderWidth: {
        /** Added for backwards compatibility */
        DEFAULT: '1px',
        0: '0px',
        1: '1px'
      },
      colors: {
        /** Backwards compatability */
        'purple-1': 'rgba(244, 244, 254, 0.8)',
        'purple-2': '#F4F4FE',
        'purple-3': 'rgba(222, 222, 245, 0.7)',
        'purple-4': '#DEDEF5',
        'purple-5': '#979EDD',
        'pink-1': 'rgba(253, 242, 249, 0.8)',
        'pink-2': '#FDF2F9',
        'pink-3': 'rgba(244, 215, 231, 0.7)',
        'pink-4': '#F4D7E7',
        'pink-5': '#E5A1CA',
        'orange-1': 'rgba(250, 237, 223, 0.8)',
        'orange-2': '#FAEDDF',
        'orange-3': 'rgba(242, 222, 193, 0.7)',
        'orange-4': '#F2DEC1',
        'orange-5': '#EEAC7C',
        'yellow-1': 'rgba(250, 247, 224, 0.8)',
        'yellow-2': '#FAF7E0',
        'yellow-3': 'rgba(246, 238, 170, 0.7)',
        'yellow-4': '#F6EEAA',
        'yellow-5': '#ECD37B',
        'modal-overlay': '#42445240',
        'error-red': '#E3564D',
        'error-red-hover': '#F17C75',
        'highlight-blue': '#A5C7EF',
        'hyperlink-blue': '#6AA2E3',
        'star-yellow': '#FAD861',
        'black-hover': '#56596A',
        'off-white': '#FAFBFD',
        'blue-grey-1': '#F8FAFD',
        'blue-grey-2': '#F5F7FB',
        'blue-grey-3': '#EBEFF6',
        'blue-grey-4': '#DBE2EF',
        'green-1': 'rgba(246, 254, 241, 0.8)',
        'green-2': '#F6FEF1',
        'green-3': 'rgba(211, 243, 191, 0.7)',
        'green-4': '#D3F3BF',
        'green-5': '#7AC181',
        'approval-green': '#6EC87C',
        /** New colors */
        transparent: '#00000000',
        white: '#ffffff',
        'off-white': '#fbfbfb',
        'light-grey': {
          1: '#f8f8f8',
          2: '#f1f1f1'
        },
        highlight: {
          light: '#c0d8f480',
          dark: '#2e6abb80'
        },
        'overlay-background': {
          light: '#27272799',
          dark: '#000000cc'
        },
        'scroll-bar': '#88888880',
        grey: {
          1: '#dddddd',
          2: '#c1c1c1',
          3: '#a4a4a4',
          4: '#888888',
          5: '#777777',
          6: '#666666',
          7: '#555555'
        },
        black: {
          /** For backwards compatibility */
          DEFAULT: '#424452',
          /** New black colours */
          1: '#343434',
          2: '#272727',
          3: '#202020',
          4: '#191919'
        },
        blue: {
          1: '#f5f9fe',
          2: '#edf4fc',
          3: '#e4eefa',
          4: '#dbe9f9',
          5: '#c0d8f4',
          6: '#a5c7ef',
          7: '#88b4e9',
          8: '#6aa2e3',
          9: '#5592df',
          10: '#4584d7',
          11: '#3677c9',
          12: '#2e6abb',
          13: '#285faa'
        },
        red: {
          1: '#f17c75',
          2: '#ea6961',
          3: '#e3564d',
          4: '#d84940'
        },
        'rainbow-red': {
          1: '#fae4df',
          2: '#f9d8d4',
          3: '#f6c4be',
          4: '#ee837c',
          5: '#f07567',
          6: '#f07567cc',
          7: '#db5b5366',
          8: '#c6524b',
          9: '#fae4df80',
          10: '#db5b5333',
          11: '#db5b534D'
        },
        'rainbow-orange': {
          1: '#faeddf',
          2: '#f9e5d4',
          3: '#f6d7be',
          4: '#eeac7c',
          5: '#e79c5e',
          6: '#e79c5ecc',
          7: '#df8d4966',
          8: '#c97f42'
        },
        'rainbow-yellow': {
          1: '#faf7e0',
          2: '#f8f2d4',
          3: '#f5ebbe',
          4: '#ecd37b',
          5: '#e7c15f',
          6: '#e7c15fcc',
          7: '#d4af4d66',
          8: '#bf9e45'
        },
        'rainbow-green': {
          1: '#f2f9ee',
          2: '#def1de',
          3: '#cdeacc',
          4: '#7fc686',
          5: '#78b776',
          6: '#78b776cc',
          7: '#63a86166',
          8: '#599857'
        },
        'rainbow-blue': {
          1: '#ecf5f8',
          2: '#e0eef4',
          3: '#cfe6ee',
          4: '#95c8d9',
          5: '#89bcce',
          6: '#89bccecc',
          7: '#74aabd66',
          8: '#6999aa'
        },
        'rainbow-purple': {
          1: '#f4f4fe',
          2: '#e3e5f7',
          3: '#d5d7f3',
          4: '#979edd',
          5: '#7e83c8',
          6: '#7e83c8cc',
          7: '#6e73b866',
          8: '#6368a6'
        },
        'rainbow-pink': {
          1: '#fdf2f9',
          2: '#f8e5f0',
          3: '#f5d7e9',
          4: '#e5a1ca',
          5: '#e485be',
          6: '#e485becc',
          7: '#d071aa66',
          8: '#bc6699'
        }
      }
    }
  },
  variants: {},
  plugins: [require('tailwind-scrollbar-hide')]
};
