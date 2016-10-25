SystemML Website
================

Build System dependencies
-------------------------

#### Node.js and npm

In order to build this project you will need the latest version of [node.js and npm](https://nodejs.org/). Detailed instructions can be found [here](https://github.com/nodejs/node/wiki/Installation).

#### Gulp

We use Gulp to compile Sass and JS aswell as run the Jekyll build. You can install it with npm:

```
$ sudo npm install -g gulp
```

### Building the website

#### Download website dependancies

```
$ npm install
```

#### Build website contents

```
$ gulp
```

If all goes well it open the site in your browser at `http://localhost:3000`.
