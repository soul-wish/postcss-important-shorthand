# PostCSS Important Shorthand [![Build Status][ci-img]][ci]

[PostCSS] plugin that allows you to use shorthand for your `!important` declarations.

> *Please remember, that you shouldn't use '!important' in most cases, so be careful with them. But here is a plugin, in case you really need them :). You can write `!important` declarations in different ways, as you can see on the example below. Just choose the most convenient one.*

CSS before:
```css
.test-class {
    position: relative !;
    margin: !auto;
    padding: 5px;
    border: 1px solid black;
    font: 16px/20px Arial, sans-serif;
    text-align: center!;
}
```

CSS after:
```css
.test-class {
    position: relative !important;
    margin: auto !important;
    padding: 5px;
    border: 1px solid black;
    font: 16px/20px Arial, sans-serif;
    text-align: center !important;
}
```

## Install via `npm`

```
$ npm install --save-dev postcss-important-shorthand
```

## Usage

See [PostCSS] docs for examples for your environment.

#### PostCSS
```js
postcss([ require('postcss-important-shorthand') ])
```

#### Gulp

In Gulp you can use [gulp-postcss](https://github.com/postcss/gulp-postcss) with `postcss-important-shorthand` npm package.

```js
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var important = require('postcss-important-shorthand');

gulp.task('css', function () {
  return gulp.src('./src')
    .pipe(postcss([
      important
    ]))
    .pipe(gulp.dest('./dist'));
});
```

#### Grunt

In Grunt you can use [grunt-postcss](https://github.com/nDmitry/grunt-postcss) with `postcss-important-shorthand` npm package.

```js
grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
    postcss: {
        options: {
            processors: [
                require('postcss-important-shorthand')
            ]
        },
        dist: {
            src: 'css/*.css'
        }
    }
});

grunt.registerTask('css', ['postcss:dist']);
```

## License

MIT © [Sergey Lysenko](http://soulwish.info)


[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/soul-wish/postcss-important-shorthand.svg
[ci]:      https://travis-ci.org/soul-wish/postcss-important-shorthand
