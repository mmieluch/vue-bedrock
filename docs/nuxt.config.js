import path from 'path'

const { resolve } = path
// This will resolve to the root of the package.
const __dirname = resolve('.')

export default {
  rootDir: __dirname,
  srcDir: resolve(__dirname, 'src'),

  build: {
    extractCSS: true,
    cssSourceMap: true,
    extend (config) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
      config.devtool = 'source-map'
    }
  },
}
