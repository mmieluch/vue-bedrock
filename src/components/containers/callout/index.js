import vbCallout from './callout'
import { registerComponent, vueUse } from '../../../utils/plugins'

const VuePlugin = {
  install (Vue) {
    console.log('installing')
    registerComponent(Vue, 'vbCallout', vbCallout)
  }
}

vueUse(VuePlugin)

export default VuePlugin
