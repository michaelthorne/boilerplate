HTML5 Boilerplate
=

Getting Started
-

1. Clone the repository: `git clone git@github.com:michaelthorne/boilerplate.git`
2. Change to the directory you cloned the repository into: `cd boilerplate`
3. Run the node install command so that the required Grunt plugins get downloaded: `npm install`
4. Start the Grunt connect server and the watch task: `grunt serve`

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
    - `@color-black: #000;`
    - `@color-grey-dark: #111;`
    - `@color-white: #fff;`
    - These are defined in: `inc/colors.less`
- **Helpers**
    - `.clearfix // Contain floats`
    - `.hidden // Hide from screenreaders and browsers`
    - `.visuallyhidden // Hide from screenreaders only`
    - `.invisible // Hide visually and from screenreaders, but maintain layout`
    - `.hide-small // Hide on small screens`
    - `.hide-medium // Hide on medium screens`
    - `.hide-large // Hide on large screens`
    - These are defined in: `inc/helpers.less`

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
