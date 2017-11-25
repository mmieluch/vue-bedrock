module.exports = {
  src: __dirname,

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#2c3840' },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    cssSourceMap: true,
    /*
    ** Run ESLint on save
    */
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
    },
  },

  manifest: {
    name: 'Vue Bedrock',
    description: 'Foundation components for Vue.js',
  },

  css: [
    'foundation-sites/dist/css/foundation.css',
  ],
}
