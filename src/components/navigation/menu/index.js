import vbMenu from './menu.vue'
import vbMenuItem from './menu-item.vue'
import { registerComponent, vueUse } from '../../../utils/plugins'

const VuePlugin = {
  install (Vue) {
    registerComponent(Vue, 'vbMenu', vbMenu)
    registerComponent(Vue, 'vbMenuItem', vbMenuItem)
  }
}

vueUse(VuePlugin)

export default VuePlugin
