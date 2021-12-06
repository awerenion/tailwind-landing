module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        62: '62%',
        82: '82%',
        130: '130px',
        183: '183px',
        780: '784px'
      },
      height: {
        82: '82px',
        40: '40px',
        216: '216px',
        128: '128px'
      },
      colors: {
        blue: {
          some: '#1F4ADF',
          DEFAULT: 'blue',
          darker: '#161622',
          another: '#141420'
        }
      },
      maxWidth: {
        580: '580px',
        780: '784px'
      },
      fontSize: {
        xl: ['3rem', '1.4']
      },
      inset: {
        84: '15.2rem'
      },
      zIndex: {
        '-10': '-10'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
