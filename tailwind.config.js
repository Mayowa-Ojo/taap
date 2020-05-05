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
    colors: {
      custom: {
        body: "#7066E3",
      }
    },
    extend: {
      spacing: {
        '72': '18rem'
      }
    }
  },
  variants: {
    fill: ['responsive', 'hover', 'focus']
  },
  plugins: []
};
