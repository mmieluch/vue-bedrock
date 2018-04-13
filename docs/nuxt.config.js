import path from 'path'
import nodeExternals from 'webpack-node-externals'

const { resolve } = path
// This will resolve to the root of the project, not the directory holding the
// config file.
const __dirname = resolve('.')
const nodeModulesPrefix = resolve(__dirname, 'node_modules')

const allowedPathBootstrapVue = nodeModulesPrefix + '/bootstrap-vue'

export default {
  rootDir: __dirname,
  srcDir: resolve(__dirname, 'docs'),

  build: {
    babel: {
      only: [
        'docs',
        'src',
        'node_modules/bootstrap-vue',
      ],
    },
    cssSourceMap: true,
    extend (config, ctx) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
      config.resolve.alias.VB = resolve(__dirname, 'src')
      config.devtool = 'source-map'

      config.module.rules[1].exclude = function (path) {
        if (path.startsWith(allowedPathBootstrapVue)) {
          return false
        }

        return true
      }

      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [
              /^bootstrap-vue/,
              // Load non-javascript files with extensions, presumably via loaders.
              /\.(?!(?:jsx?|json)$).{1,5}$/i,
            ]
          })
        ]
      }
    },
    extractCSS: true,
  },
}
