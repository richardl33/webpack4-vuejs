'use strict'

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
   mode: 'development',
   entry: [
      './src/app.js'
   ],
   modules: {
      rules: [
         {
            test: /\.vue$/,
            use: 'vue-loader'
         }
      ]
   },
   plugins: [
      new VueLoaderPlugin()
   ]
}