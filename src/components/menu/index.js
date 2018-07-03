import vbMenu from './menu'
import vbMenuItem from './menu-item'
import vbMenuText from './menu-text'
import { registerComponent, vueUse } from '../../utils/plugins'

const MenuVuePlugin = {
  install (Vue) {
    registerComponent(Vue, 'vbMenu', vbMenu)
    registerComponent(Vue, 'vbMenuItem', vbMenuItem)
    registerComponent(Vue, 'vbMenuText', vbMenuText)
  }
}

vueUse(MenuVuePlugin)

export default MenuVuePlugin
