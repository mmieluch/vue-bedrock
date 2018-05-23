import { registerComponent, vueUse } from '../../../../utils/plugins'
import vbFormTextarea from './form-textarea'

const VuePlugin = {
  install (Vue) {
    registerComponent(Vue, 'vbFormTextarea', vbFormTextarea)
  }
}

vueUse(VuePlugin)

export default VuePlugin
