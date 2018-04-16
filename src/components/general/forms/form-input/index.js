import vbFormInput from './form-input'
import { registerComponent, vueUse } from '../../../../utils/plugins'

const VuePlugin = {
  install (Vue) {
    registerComponent(Vue, 'vbFormInput', vbFormInput)
  }
}

vueUse(VuePlugin)

export default VuePlugin
