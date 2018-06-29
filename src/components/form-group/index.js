import { registerComponent, vueUse } from '../../utils/plugins'
import FormGroup from './form-group'

const VuePlugin = {
  install (Vue) {
    registerComponent(Vue, 'vbFormGroup', FormGroup)
  }
}

vueUse(VuePlugin)

export default VuePlugin
