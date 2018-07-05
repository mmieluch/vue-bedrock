import FormGroup from '../form-group/form-group'
import FormFile from './form-file'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  vbFormFile: FormFile,
  vbFile: FormFile,
}

const FormFileVuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(FormFileVuePlugin)

export default FormFileVuePlugin
