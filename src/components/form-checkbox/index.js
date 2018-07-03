import vbFormCheckbox from './form-checkbox'
import { registerComponent, vueUse } from '../../utils/plugins'

const FormCheckboxVuePlugin = {
  install (Vue) {
    registerComponent(Vue, 'vbFormCheckbox', vbFormCheckbox)
    registerComponent(Vue, 'vbCheckbox', vbFormCheckbox)
  }
}

vueUse(FormCheckboxVuePlugin)

export default FormCheckboxVuePlugin
