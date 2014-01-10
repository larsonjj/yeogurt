Welcome To Yeogurt 0.1.0
=======

Yeogurt is a multi-site, front-end build framework that automates many repetitive tasks such as: minifying/concatinating source files, compiling preprocessors ([SASS](http://sass-lang.com/)/[Jade](http://jade-lang.com/)), and deploying code to an FTP server. It is designed to aleviate the pain of many site setup tasks and provide a solid workflow for both teams and individual developers.

## Features
- Based on [HTML5 Boilerplate](http://html5boilerplate.com/)
- Includes [Modernizr](http://modernizr.com/) and [HTML5 Shiv](https://github.com/aFarkas/html5shiv)
- Workflow using [Bower](http://bower.io) and [Grunt](http://gruntjs.com)
- Automatic dependency and installation setup
- Livereloading the browser and file injection upon changes
- Built-in build script for auto-minification of CSS and JavaScript files for production
- Pre-setup Sass files and folders for baseline project structure
- Pre-setup Jade files and folders for component/template/page structure
- Includes [.editorconfig](http://editorconfig.org/) for consistent coding styles within text editors
- Standard .gitignore and .svn_ignore to ignore install packages and generated build files
- [JSHint](http://www.jshint.com/) .jshintrc file for configuring JavaScript linting
- [CSSLint](http://csslint.net/) .csslintrc file for configuring CSS linting
- Automated FTP deploy process
- Can handle multiple sites with project wide build and deploy tasks
- Optimised SVN deploy/build (names build files based on latest commit revision)

## Dashboard
[Go to dashboard](dashboard/index.html)

### Want to skip this page and go right to the dashboard from now on?

Just open up Gruntfile.js in the yeogurt/sites/example folder and change line 133 from this:

```javascript
path: 'http://localhost:<%= connect.options.port %>/'
```
To this:
```javascript
path: 'http://localhost:<%= connect.options.port %>/dashboard/index.html'
```


## License

The MIT License (MIT)

Copyright &copy; 2013 Jake Larson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

