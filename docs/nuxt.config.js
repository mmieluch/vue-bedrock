module.exports = {
  srcDir: __dirname,

  build: {
    extractCSS: true,
    cssSourceMap: true,
    extend (config) {
      config.resolve.alias.vue = 'vue/dist/vue.common'

      config.devtool = 'source-map'
    }
  },

  css: [],
}
