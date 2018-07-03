import FormSelect from './form-select'
import { registerComponent, vueUse } from '../../utils/plugins'

const FormSelectVuePlugin = {
  install (Vue) {
    registerComponent(Vue, 'vbFormSelect', FormSelect)
    registerComponent(Vue, 'vbSelect', FormSelect)
  }
}

vueUse(FormSelectVuePlugin)

export default FormSelectVuePlugin
