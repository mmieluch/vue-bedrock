import vbFormInput from './form-input'
import { registerComponent, vueUse } from '../../utils/plugins'

const VuePlugin = {
  install (Vue) {
    registerComponent(Vue, 'vbFormInput', vbFormInput)
    registerComponent(Vue, 'vbInput', vbFormInput)
  }
}

vueUse(VuePlugin)

export default VuePlugin
