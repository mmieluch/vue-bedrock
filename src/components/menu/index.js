import vbMenu from './menu'
import vbMenuItem from './menu-item'
import vbMenuText from './menu-text'
import { registerComponent, vueUse } from '../../utils/plugins'

const VuePlugin = {
  install (Vue) {
    registerComponent(Vue, 'vbMenu', vbMenu)
    registerComponent(Vue, 'vbMenuItem', vbMenuItem)
    registerComponent(Vue, 'vbMenuText', vbMenuText)
  }
}

vueUse(VuePlugin)

export default VuePlugin
