const Dotenv = require("dotenv-webpack");

// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  /* config options here */
})
module.exports = {
  webpack: (config) => {
    config.plugins.push(new Dotenv({ silent: true }));
    return config;
  }
};