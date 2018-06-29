import { registerComponent, vueUse } from '../../utils/plugins'
import vbPagination from './pagination'

const VuePlugin = {
  install (Vue) {
    registerComponent(Vue, 'vbPagination', vbPagination)
  }
}

vueUse(VuePlugin)

export default VuePlugin
