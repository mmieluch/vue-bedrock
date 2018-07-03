import vbCallout from './callout'
import { registerComponent, vueUse } from '../../utils/plugins'

const CalloutVuePlugin = {
  install (Vue) {
    registerComponent(Vue, 'vbCallout', vbCallout)
  }
}

vueUse(CalloutVuePlugin)

export default CalloutVuePlugin
