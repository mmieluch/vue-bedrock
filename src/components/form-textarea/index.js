import { registerComponents, vueUse } from '../../utils/plugins'
import FormTextarea from './form-textarea'

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, {
      vbFormTextarea: FormTextarea,
      vbTextarea: FormTextarea,
    })
  }
}

vueUse(VuePlugin)

export default VuePlugin
