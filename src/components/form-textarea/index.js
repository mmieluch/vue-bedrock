import { registerComponents, vueUse } from '../../utils/plugins'
import FormTextarea from './form-textarea'

const FormTextareaVuePlugin = {
  install (Vue) {
    registerComponents(Vue, {
      vbFormTextarea: FormTextarea,
      vbTextarea: FormTextarea,
    })
  }
}

vueUse(FormTextareaVuePlugin)

export default FormTextareaVuePlugin
