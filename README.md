# Apache SystemDS Website

This repository contains the code for the SystemDS [main website](https://github.com/apache/systemds-website).

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

### Troubleshooting

`Error: spawn jekyll.bat ENOENT` can be resolved by 

```bash
gem install jekyll
```

If you are still facing the issue, perhaps the discussion
[here](https://github.com/j143/systemds-website/issues/3) might would give some pointers.


## Updating the website

After generating files by following above instructions.

1. Create a new branch (for example, `update-website`) from the `asf-staging` branch.

```bash
git checkout asf-staging
git checkout -b update-website
```

2. Copy the generated files to the website `content` folder.

```bash
cp -r _site/* content/
git add content/*
git commit -m "Update SystemDS website with latest changes"
```

3. Add changes to the personal fork and create a PR against `asf-staging` branch.

```bash
git push https://github.com/<id>/systemds-website update-website
```

An example, [PR#83](https://github.com/apache/systemds-website/pull/83).
