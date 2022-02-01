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
      gray:colors.gray,
      black:colors.black,
      'text_footer':'#aaaaaa',
      'link_color':'#81b1bc',
      'filter_color':'#dadada',
      'city_explain':'#707070',
      'button_color':'#23C469',
      'tag_gray':'#f2f2f2'
    },
    extend: {
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      },
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
        '18%':'18%',
        '72%':'72%'
      },
    },
  },
  plugins: [],
}
