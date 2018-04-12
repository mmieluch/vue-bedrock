import vbMenu from './menu'
import vbMenuItem from './menu-item'
import { registerComponent, vueUse } from '../../../utils/plugins'

const VuePlugin = {
  install (Vue) {
    registerComponent(Vue, 'vbMenu', vbMenu)
    registerComponent(Vue, 'vbMenuItem', vbMenuItem)
  }
}

vueUse(VuePlugin)

export default VuePlugin
