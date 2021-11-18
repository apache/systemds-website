
### Notes on the Website technology stack

For smooth upgrade of tech stack the following notes would help
with understanding which technologies we are using and how to
maintain or upgrade them.

#### Susy 2

[Susy 2](https://susy.readthedocs.io/) is no longer maintained.
This is deprecated around 2017. Susy 3 exists but it is better to
move to another type of grid system.

It is used in `_src/_sass/layout/_config.scss`
as a [global default](https://susy.readthedocs.io/settings/#global-defaults)

```scss

$susy: (
  columns: 12,
  gutters: 1.953125,
  math: fluid,
  output: float,
  gutter-position: inside
);
```

#### GulpJs

We are already using the latest version. Website at https://gulpjs.com/

[version 4.0.2](https://github.com/gulpjs/gulp/releases/tag/v4.0.2) was release in May 2019.
There is a documentation related commits in the gulp repo in the last six months.

#### NodeJs

16.x is currently used. 16.x will be end of life by 2022.

see [nodejs release policy](https://nodejs.org/en/about/releases/)

Recommendation: Try to switch to nodejs 18.x in future.
