import FormSelect from './form-select'
import { registerComponent, vueUse } from '../../utils/plugins'

const VuePlugin = {
  install (Vue) {
    registerComponent(Vue, 'vbFormSelect', FormSelect)
    registerComponent(Vue, 'vbSelect', FormSelect)
  }
}

vueUse(VuePlugin)

export default VuePlugin
