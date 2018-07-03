import { registerComponent, vueUse } from '../../utils/plugins'
import FormGroup from './form-group'

const FormGroupVuePlugin = {
  install (Vue) {
    registerComponent(Vue, 'vbFormGroup', FormGroup)
  }
}

vueUse(FormGroupVuePlugin)

export default FormGroupVuePlugin
