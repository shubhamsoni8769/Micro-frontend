const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const packageJson = require('../package.json')

const commonConfig = require('./webpack.common')

const domain = "https://d2cczx0gm1s15b.cloudfront.net"
//process.env.PRODUCION_DOMAIN

const prodConfig = {
    mode: "production",
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "container",
        remotes: {
          marketing : `marketing@${domain}/marketing/latest/remoteEntry.js`
        },
        shared: packageJson.dependencies
      }),
    ],
  };

  module.exports = merge(commonConfig, prodConfig);



  