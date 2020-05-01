const path = require('path');

module.exports = {
    mode: 'development',
    entry : './src/index.js',
    output : {
        path :__dirname +'/build',
        filename: 'bundle.js'
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