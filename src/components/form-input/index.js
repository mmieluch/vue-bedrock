import vbFormInput from './form-input'
import { registerComponent, vueUse } from '../../utils/plugins'

const FormInputVuePlugin = {
  install (Vue) {
    registerComponent(Vue, 'vbFormInput', vbFormInput)
    registerComponent(Vue, 'vbInput', vbFormInput)
  }
}

vueUse(FormInputVuePlugin)

export default FormInputVuePlugin
