module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        82: '82%',
        1440: '1440px',
        130: '130px',
        183: '183px'
      },
      height: {
        82: '82px',
        40: '40px',
        216: '216px'
      },
      colors: {
        blue: {
          some: '#1F4ADF',
          DEFAULT: 'blue'
        }
      },
      maxWidth: {
        580: '580px'
      },
      fontSize: {
        xl: ['3rem', '1.4']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
