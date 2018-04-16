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
        autocomplete: this.$props.autocomplete,
        disabled: this.$props.disabled,
        id: this.safeId(),
        name: this.$props.type,
        placeholder: this.$props.placeholder,
        readonly: this.$props.readonly,
        required: this.$props.required,
        type: this.$props.type,
      },
      class: this.computedClass,
    })
  },
  mixins: [
    IdMixin,
  ],
  props: {
    autocomplete: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    state: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: 'text',
      validator: value => arrayIncludes(TYPES, value),
    },
  },
  computed: {
    computedClass () {
      return {
        'is-invalid-input': !this.$props.state,
      }
    },
  },
}
