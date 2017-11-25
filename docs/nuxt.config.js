const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '..'),
  srcDir: __dirname,

  build: {
    extractCSS: true,
    cssSourceMap: true,
    extend (config, ctx) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
      config.devtool = 'source-map'

      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    }
  },

  css: [
    'foundation-sites/dist/css/foundation.css',
  ],
}
