const path = require('path');

module.exports = {
    mode: 'development',
    entry : {bundle : './src/index.js',
    worker : './src/nnworker.js'
  },
    output : {
        path :__dirname +'/build',
        filename: '[name].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                cacheDirectory:true
              }
            }
          }
        ]
      }
    

   

};