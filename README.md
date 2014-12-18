## Boilerplate

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com)

### Requirements

Ensure that the following is installed on your computer:

1. [Git](http://git-scm.com)
2. [Node.js](http://nodejs.org)

### Getting Started

1. Clone the repository: `git clone git@github.com:michaelthorne/boilerplate.git`
2. Change to the directory you cloned the repository into: e.g. `cd boilerplate`
3. Run the node install command which downloads the required Grunt plugins: `npm install`
4. Start the local server and watch task: `grunt serve`

### Validation

1. HTML: `grunt validation:build`
2. CSS: `grunt csslint:build`
3. JavaScript: `grunt jshint:build`

### LESS Structure

```
less/
     base/
        anchors.less
        base.less
        forms.less
        grid.less
        headings.less
        helpers.less
        hr.less
        paragraphs.less
        print.less
     generic/
        mixins.less
        reset.less
        variables.less
     objects/
        media.less
     vendor/
        font-awesome.less
        normalize.less
     style.less
```

### Features

- **Breakpoints, Colors, Fonts**
    - `less/generic/variables.less`
- **Clearfix, Fluid Embeds, Text Utilities**
    - `less/base/helpers.less`
- **Transforms, Transitions**
    - `less/generic/mixins.less`

### Components

- [Normalize.css](http://necolas.github.io/normalize.css)
- [jQuery](http://jquery.com)
- [Font Awesome](http://fontawesome.io)
- [Placeholder](http://mths.be/placeholder)

### Polyfills

The following scripts are included for **IE8** and below:
- [html5shiv](https://github.com/aFarkas/html5shiv)
- [matchMedia.js](https://github.com/paulirish/matchMedia.js)
- [Respond.js](https://github.com/scottjehl/Respond)

### Inspiration

This project is inspired by the original [HTML5 Boilerplate](http://html5boilerplate.com).
