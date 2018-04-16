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
        autocomplete: this.$props.autocomplete,
        disabled: this.$props.disabled,
        id: this.$props.id,
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
        'is-invalid-input': !this.$props.state,
      }
    },
  },
}
