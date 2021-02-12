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
        require('tailwindcss')
    ])
    
    .styles('resources/css/bootstrap/themes/dashboard.css', 'public/css/bootstrap/themes/dashboard.css')
    
    .js('resources/js/app.js', 'public/js')
    .scripts('resources/js/bootstrap/themes/dashboard.js', 'public/js/bootstrap/themes/dashboard.js')
	
    .react('resources/react/App.js', 'public/js/react/React_app.js')
    .webpackConfig(require('./webpack.config'));

