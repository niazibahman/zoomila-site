const colors=require('tailwindcss/colors')
module.exports = {
  content: ["./pages/**/*.{html,js}","./src/**/*.{html,js}"],
  theme: {
    colors:{
      'primary_color':'#262637',
      'green_accent':'#3aafa9',
      'blue_accent':'#198ae1',
      'zoomila_bg':'#f8f8f8',
      white:colors.white,
      'text_footer':'#aaaaaa',
      'link_color':'#81b1bc'
    },
    extend: {
      fontFamily:{
        iransans:["iransans"],
        iransansbold:["iransansbold"],
        iransanslight:["iransanslight"],
        iransansmedium:["iransansmedium"],
        iransansultralight:["iransansultralight"],
      },
      height: {
        '92': '23rem',
        '128':'32rem'
      },
      width: {
        '92': '23rem',
        '3/10':'30%',
        '49%':'49%',
        '18%':'18%'
      },
    },
  },
  plugins: [],
}
