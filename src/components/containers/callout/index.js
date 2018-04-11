import vbCallout from './callout'
import { registerComponent, vueUse } from '../../../utils/plugins'

const VuePlugin = {
  install (Vue) {
    registerComponent(Vue, 'vbCallout', vbCallout)
  }
}

vueUse(VuePlugin)

export default VuePlugin
