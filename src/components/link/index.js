import vbLink from './link'
import { registerComponent, vueUse } from '../../utils/plugins'

const LinkVuePlugin = {
  install (Vue) {
    registerComponent(Vue, 'vbLink', vbLink)
  }
}

vueUse(LinkVuePlugin)

export default LinkVuePlugin
