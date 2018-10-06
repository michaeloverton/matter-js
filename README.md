<img alt="Matter.js" src="http://brm.io/matter-js/img/matter-js.svg" width="300">

### Context

Interactive Physics is a physics simulator used to give high school students (and whoever else) intuition about physics.

We intend to build Interactive Physics 2020 / IP2 / IP2o2o (whatever) using matter.js. This fork of matter.js will be used for testing features and also giving students a low-risk playground to mess with code and get a feel for coding practices.

Thus far, we've spliced some point gravity features into the demos. We will need this to model electromagnetism.

### Run Locally

1. Download and install Visual Studio Code, Git (and Git Bash if on Windows), Node (8ish - we use npm).

2. Install Gulp. From the command line (Git Bash or whichever you prefer), run:
```
npm install gulp-cli -g
npm install gulp -g
```

3. Clone this repo. You should get a GitHub account, and you may need to [associate SSH keys with this account](https://help.github.com/articles/connecting-to-github-with-ssh/) in order to clone. From the command line, cd into a location where you want the project to be, then run:
```
git clone git@github.com:michaeloverton/matter-js.git
```

4. Still from the command line, cd into the cloned repo:
```
cd matter-js
```

5. Grab dependencies.
```
npm install
```

6. Run the server using Gulp.
```
gulp dev
```

### Usage

Visit the [Getting started](https://github.com/liabru/matter-js/wiki/Getting-started) wiki page for a minimal usage example which should work in both browsers and Node.js.  
Also see the [Running](https://github.com/liabru/matter-js/wiki/Running) and [Rendering](https://github.com/liabru/matter-js/wiki/Rendering) wiki pages, which show how to use your own game and rendering loops.

### Tutorials

See the list of [tutorials](https://github.com/liabru/matter-js/wiki/Tutorials).

### Examples

See the [examples](https://github.com/liabru/matter-js/tree/master/examples) directory which contains the source for all [demos](#demos).  
There are even more examples on [codepen](http://codepen.io/collection/Fuagy/).

### Plugins

The engine can be extended through plugins, see these resources:

- [Using plugins](https://github.com/liabru/matter-js/wiki/Using-plugins)
- [Creating plugins](https://github.com/liabru/matter-js/wiki/Creating-plugins)
- [List of plugins](https://github.com/liabru/matter-js/wiki/List-of-plugins)
- [matter-plugin-boilerplate](https://github.com/liabru/matter-plugin-boilerplate)

### Documentation

See the [API Documentation](http://brm.io/matter-js/docs/) and the [wiki](https://github.com/liabru/matter-js/wiki)

### License

Matter.js is licensed under [The MIT License (MIT)](http://opensource.org/licenses/MIT)  
Copyright (c) 2014 Liam Brummitt

This license is also supplied with the release and source code.  
As stated in the license, absolutely no warranty is provided.
