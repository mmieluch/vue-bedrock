import vbLink from './link'
import { registerComponent, vueUse } from '../../utils/plugins'

const VuePlugin = {
  install (Vue) {
    registerComponent(Vue, 'vbLink', vbLink)
  }
}

vueUse(VuePlugin)

export default VuePlugin
