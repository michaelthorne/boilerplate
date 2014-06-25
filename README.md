## HTML5 Boilerplate

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com)
[![NPM Dependencies](https://david-dm.org/michaelthorne/boilerplate.png)](https://david-dm.org)

### Requirements

Ensure that the following are installed on your computer:

1. [Git](http://git-scm.com)
2. [Node.js](http://nodejs.org)

### Getting Started

1. Clone the repository: `git clone git@github.com:michaelthorne/boilerplate.git`
2. Change to the directory you cloned the repository into: e.g. `cd boilerplate`
3. Run the node install command which downloads the required Grunt plugins: `npm install`
4. Start the local server and watch task: `grunt serve`

### LESS Structure

```
less/
     base/
        base.less
        grid.less
        helpers.less
        print.less
     generic/
        mixins.less
        normalize.less
        variables.less
     style.less
```

### Features

- **Breakpoints, Colors, Fonts**
    - `less/generic/variables.less`
- **Helpers**
    - `less/base/helpers.less`
- **Mixins**
    - `less/generic/mixins.less`

### Components

- [Font Awesome](http://fontawesome.io)
- [jQuery](http://jquery.com)
- [Normalize.css](http://necolas.github.io/normalize.css)

### Polyfills

The following scripts are included for **IE9** and below:
- [html5shiv](https://github.com/aFarkas/html5shiv)
- [matchMedia.js](https://github.com/paulirish/matchMedia.js)
- [Respond.js](https://github.com/scottjehl/Respond)

### Thanks

This project is inspired by the original [HTML5 Boilerplate](http://html5boilerplate.com).
