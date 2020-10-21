# SystemML Website

## Dependencies

### Node.js and npm

In order to build this project you will need the latest version of [node.js and npm](https://nodejs.org/).
Detailed instructions for download and installation can be found [here](https://github.com/nodejs/node#download).

### Gulp

We use Gulp to compile Sass and JS as well as run the Jekyll build. You can install it with npm:

```bash
sudo npm install -g gulp
```

## Building the website

### Download website dependancies

```bash
npm install
```

### Build website contents

```bash
gulp
```

If all goes well it open the site in your browser at `http://localhost:3000`.
