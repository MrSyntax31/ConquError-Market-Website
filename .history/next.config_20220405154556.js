const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([optimizedImages], { target: 'serverless' });

const withCSS = require('@zeit/next-css');
module.ex