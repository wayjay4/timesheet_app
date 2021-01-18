const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({processCssUrls: false})
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer')
    ])
    .sass('resources/sass/app.scss', 'public/css')
    .styles(['node_modules/bootstrap/dist/css/bootstrap.min.css'], 'public/css/bootstrap/bootstrap.min.css')
	.styles(['node_modules/bootstrap/dist/css/bootstrap.min.css.map'], 'public/css/bootstrap/bootstrap.min.css.map')
    .scripts(['node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'], 'public/js/bootstrap/bootstrap.bundle.min.js')
    .scripts(['node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map'], 'public/js/bootstrap/bootstrap.bundle.min.js.map')
	.react('resources/react/App.js', 'public/js/react/React_app.js')
	.js('resources/js/app.js', 'public/js')
    .webpackConfig(require('./webpack.config'));

