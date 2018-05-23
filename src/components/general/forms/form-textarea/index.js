import { registerComponents, vueUse } from '../../../../utils/plugins'
import vbFormTextarea from './form-textarea'

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, {
      vbFormTextarea,
      vbTextarea: vbFormTextarea,
    })
  }
}

vueUse(VuePlugin)

export default VuePlugin
