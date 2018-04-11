import vbMenu from './menu'
import { registerComponent, vueUse } from '../../../utils/plugins'

const VuePlugin = {
  install (Vue) {
    registerComponent(Vue, 'vbMenu', vbMenu)
  }
}

vueUse(VuePlugin)

export default VuePlugin
