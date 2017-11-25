const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '..'),
  srcDir: __dirname,

  build: {
    extractCSS: true,
    cssSourceMap: true,
    extend (config) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
      config.devtool = 'source-map'
    }
  },

  css: [
    'foundation-sites/dist/css/foundation.css',
  ],
}
