import vbButtonClose from './button-close'
import { registerComponent, vueUse } from '../../utils/plugins'

const ButtonCloseVuePlugin = {
  install (Vue) {
    registerComponent(Vue, 'vbButtonClose', vbButtonClose)
  }
}

vueUse(ButtonCloseVuePlugin)

export default ButtonCloseVuePlugin
