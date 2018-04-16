import { arrayIncludes } from 'bootstrap-vue/src/utils/array'
import FormMixin from '../../../mixins/form'
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
        autocomplete: this.autocomplete,
        disabled: this.disabled,
        id: this.safeId(),
        name: this.type,
        placeholder: this.placeholder,
        readonly: this.readonly,
        required: this.required,
        type: this.type,
      },
      class: this.computedClass,
      ref: 'input',
    })
  },
  mixins: [
    IdMixin,
    FormMixin,
  ],
  props: {
    autocomplete: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: '',
    },
    readonly: {
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
        'is-invalid-input': !this.state,
      }
    },
  },
}
