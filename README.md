HTML5 Boilerplate
=

Requirements
-

This project uses [LESS](http://lesscss.org/):

- Compile `assets/less/main.less` and output it to `assets/css/main.css`
- **main.less** imports the following files:
    - `inc/breakpoints.less`
    - `inc/colors.less`
    - `inc/helpers.less`
    - `normalize.less`
    - `print.less`

Features
-

- **Breakpoints**
    - The following variables are provided for use in media queries:
    - `@bp-tiny:   40em; /* 40 * 16 =  640px */`
    - `@bp-small:  48em; /* 48 x 16 =  768px */`
    - `@bp-medium: 64em; /* 64 x 16 = 1024px */`
    - `@bp-large:  90em; /* 90 x 16 = 1440px */`
    - These are defined in: `inc/breakpoints.less`
- **Colors**
    - An example of a color variable that is provided:
    - `@color-black: #000;`
    - These are defined in: `inc/colors.less`

Components
-

- [Normalize.css](http://necolas.github.io/normalize.css/)
- [jQuery](http://jquery.com/)
- [Font Awesome](http://fontawesome.io/)

Polyfills
-

The following are included for **IE8** and below:
- [html5shiv](https://github.com/aFarkas/html5shiv)
- [Respond.js](https://github.com/scottjehl/Respond)
- [matchMedia.js](https://github.com/paulirish/matchMedia.js/)

Thanks
-

This project is inspired by the original [HTML5 Boilerplate](http://html5boilerplate.com/).
