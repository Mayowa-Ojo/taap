module.exports = {
  important: true,
  theme: {
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      spacing: {
        '72': '18rem'
      },
      colors: {
        'cpurple': {
          '100': '#7066E3',
          '200': '#6682E3'
        },
        'c-grey-0': '#5C737F',
        'c-white-0': '#F2F5F5',
        'c-white-1': '#F3F4F6',
        'c-green-0': '#45F3D4',
        'c-yellow-0': '#FFC13D',
        'c-yellow-1': '#F4F85B',
        'c-red-0': '#ED483D'
      }
    }
  },
  variants: {
    fill: ['responsive', 'hover', 'focus']
  },
  plugins: []
};
