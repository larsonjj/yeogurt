Yeogurt
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

# Installation

## Get the files

Download the latest [build](https://github.com/larsonjj/yeogurt/archive/master.zip).
Clone the git repo — git clone https://github.com/larsonjj/yeogurt.git

## Prerequisites
1. [Ruby](https://www.ruby-lang.org/en/) (OSX: install [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) from Mac App Store along with the Command Line Tools plugin. Windows: [Ruby Installer](http://rubyinstaller.org/downloads))
2. [Homebrew](http://brew.sh/) (This is optional) - Awesome OSX package manager
3. Node [Installer](http://nodejs.org/download/) (If using Homebrew, just run the following command: ```brew install node```)


## Setup Script
Once all the prerequisites are installed, you'll need to run the setup shell script which will:

1. Setup needed ignores for SVN (if applicable)
2. Install Node if you don't already have it.
3. Download/Install needed Ruby gems
4. Download/Install needed Node Packages
5. Download/Install needed bower dependencies

To run the script, navigate to the yeogurt folder and run in this command in terminal:
```bash
./install.sh
```


# Getting started with Bower and Grunt

* [bower](http://bower.io) - the package management tool
* [grunt](http://gruntjs.com) - the build tool

## Bower

When looking at the Yeogurt folder structure, you will want to navigate to the example-site folder. From here, you will be able to run all the bower commands.

### Bower Commands

```
# Search for a dependency in the Bower registry.
bower search <dep>

# Install one or more dependencies.
bower install <dep>..<depN>

# List out the dependencies you have installed for a project.
bower list

# Update a dependency to the latest version available.
bower update <dep>
```

## Bower Example

### Search Bower's registry for the plug-in you want.
bower search jquery-pjax

### Install it and save it to bower.json
bower install jquery-pjax --save


## Grunt

When looking at the Yeogurt folder structure, you will want to navigate to the example-site folder. From here, you will be able to run all of the included grunt commands below:

### Grunt commands

```
# Preview an app you have generated (with Livereload).
grunt server

# Run the JavaScript unit tests, CSSLint all CSS, and JSHint all JavaScript.
grunt test

# Same as the grunt test task, but also opens up the browser GUI for Unit tests
grunt test:open

# Build an optimized, production-ready version of your app. (files put in dist/ folder)
grunt

# Build an optimized, production-ready version of your app.
# Create a ZIP file of all files in your build.
# Upload build files and ZIP to FTP server (FTP config in .ftppass file).
grunt deploy

# SVN Sepecifc deploy
# Same as grunt deploy task, but also adds the latest SVN revision number to ZIP filename
# e.g. svn-r532.zip
grunt deploy:svn
```

# Special Thanks
A special thanks goes out to all who contribute and maintain the [Yeoman](http://yeoman.io/), [Bower](http://bower.io/), and [Grunt](http://gruntjs.com/) projects. This framework would not have been possible without you.

#License

The MIT License (MIT)

Copyright © 2013 Jake Larson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
