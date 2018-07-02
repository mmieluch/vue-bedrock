import { registerComponent, vueUse } from '../../utils/plugins'
import vbPagination from './pagination'

const PaginationVuePlugin = {
  install (Vue) {
    registerComponent(Vue, 'vbPagination', vbPagination)
  }
}

vueUse(PaginationVuePlugin)

export default PaginationVuePlugin
