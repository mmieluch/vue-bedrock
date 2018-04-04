import vbButtonClose from './button-close'
import { registerComponent, vueUse } from '../../../utils/plugins'

const VuePlugin = {
  install (Vue) {
    registerComponent(Vue, 'vbButtonClose', vbButtonClose)
  }
}

vueUse(VuePlugin)

export default VuePlugin
