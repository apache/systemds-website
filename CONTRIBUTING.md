
## Notes on the Website technology stack

For smooth upgrade of tech stack the following notes would help
with understanding which technologies we are using and how to
maintain or upgrade them.

### Susy 2

[Susy 2](https://susy.readthedocs.io/) is no longer maintained.
This is deprecated around 2017. Susy 3 exists but it is better to
move to another type of grid system.

It is used in `_src/_sass/layout/_config.scss`
as [global defaults](https://susy.readthedocs.io/settings/#global-defaults)

```scss

$susy: (
  columns: 12,
  gutters: 1.953125,
  math: fluid,
  output: float,
  gutter-position: inside
);
```

> **Recommendation:** Investigate whether we could use a more stable grid
> system.


### GulpJs

We are already using the latest version. Website at https://gulpjs.com/

[version 4.0.2](https://github.com/gulpjs/gulp/releases/tag/v4.0.2) was release in May 2019.
There are documentation related commits in the gulp repo in the last six months.

### NodeJs

16.x is currently used. 16.x will be end of life by 2022.

see [nodejs release policy](https://nodejs.org/en/about/releases/)

> **Recommendation:** Try to switch to nodejs 18.x in future.

### CSS dependencies

[noUiSlider](https://github.com/leongersen/noUiSlider) is a javascript library for range
slider. Version used in this project 8.3.0 - 2016-02-14 17:37:20. The latest version is
15.5.0 (Oct 2021).

> **Recommendation:** Check whether this library is used and upgrade to the latest

[normalize.css](https://github.com/necolas/normalize.css) is v3.0.3 (2015) to this project.

> **Recommendation:** Upgrade to 8.0.1 version last released Nov 2018

### Javascript dependencies

Jquery

1. `_src/_scripts/jquery-2.1.1.min.js`, version v2.1.1 (2014). Upgrade to [latest version](https://github.com/jquery/jquery)
2. `_src/_scripts/jquery.fitvids.js`, version v1.1 (2013). For fitting the video. If possible avoid this one.
3. `_src/assets/css/jquery-ui.css`, version v1.12.1 (2017-05-24). Upgrade to [latest version](https://github.com/jquery/jquery-ui/releases).

