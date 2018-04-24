import { registerComponent, vueUse } from '../../../utils/plugins'
import vbMenu from '../menu/menu'
import vbMenuItem from '../menu/menu-item'
import vbMenuText from '../menu/menu-text'
import vbPagination from './pagination'

const VuePlugin = {
  install (Vue) {
    registerComponent(Vue, 'vbPagination', vbPagination)
  }
}

vueUse(VuePlugin)

export default VuePlugin
