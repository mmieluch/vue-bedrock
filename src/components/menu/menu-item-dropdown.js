import DropdownMixin from '../../mixins/dropdown'
import IdMixin from '../../mixins/id'
import vbMenuItem from './menu-item'

export default {
  functional: true,
  mixins: [
    DropdownMixin,
    IdMixin,
  ],
  components: {
    vbMenuItem,
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    role: {
      type: String,
      default: 'menu',
    },
  },
  render (h, { children, props }) {
    const item = h('vb-menu-item')

    return h('li', {
      attrs: {
        role: props.role,
      },
    }, [item])
  },
}
