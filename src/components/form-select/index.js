import FormSelect from './form-select'
import { registerComponent, vueUse } from '../../utils/plugins'

const VuePlugin = {
  install (Vue) {
    registerComponent(Vue, 'vbFormInput', FormSelect)
  }
}

vueUse(VuePlugin)

export default VuePlugin
