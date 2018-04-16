import { arrayIncludes } from 'bootstrap-vue/src/utils/array'
import IdMixin from '../../../mixins/id'

const TYPES = [
  'text', 'date', 'datetime', 'datetime-local', 'email', 'month', 'number', 'password', 'search',
  'tel', 'time', 'url', 'week',
]

export default {
  name: 'vbFormInput',
  render (h) {
    return h('input', {
      attrs: {
        disabled: this.$props.disabled,
        id: this.safeId(),
        name: this.$props.type,
        required: this.$props.required,
        type: this.$props.type,
      },
    })
  },
  mixins: [
    IdMixin,
  ],
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    state: {
      type: Boolean,
      default: null,
    },
    type: {
      type: String,
      default: 'text',
      validator: value => arrayIncludes(TYPES, value),
    },

  },
}
