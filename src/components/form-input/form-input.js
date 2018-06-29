import { arrayIncludes } from 'bootstrap-vue/src/utils/array'
import FormControlStateMixin from '../../mixins/form-control-state'
import FormMixin from '../../mixins/form'
import IdMixin from '../../mixins/id'

const TYPES = [
  'text', 'date', 'datetime', 'datetime-local', 'email', 'month', 'number', 'password', 'search',
  'tel', 'time', 'url', 'week',
]

export default {
  render (h) {
    return h('input', {
      attrs: {
        autocomplete: this.autocomplete,
        disabled: this.disabled,
        id: this.safeId(),
        name: this.name,
        placeholder: this.placeholder,
        readonly: this.readonly,
        required: this.required,
        type: this.type,
      },
      class: this.computedClass,
      domProps: {
        value: this.localValue,
      },
      on: {
        input: this.onInput,
        change: this.onChange,
      },
      ref: 'input',
    })
  },
  mixins: [
    FormControlStateMixin,
    FormMixin,
    IdMixin,
  ],
  props: {
    autocomplete: {
      type: String,
    },
    formatter: {
      type: Function,
    },
    placeholder: {
      type: String,
      default: '',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
      validator: value => arrayIncludes(TYPES, value),
    },
    value: {
      default: null,
    },
  },
  data () {
    return {
      localValue: this.value,
    }
  },
  computed: {
    computedClass () {
      return [
        this.formControlStateClass,
      ]
    },
  },
  methods: {
    format (value, event) {
      if (this.formatter) {
        const formattedValue = this.formatter(value, event)

        if (formattedValue !== value) {
          return formattedValue
        }
      }

      return value
    },
    onChange (event) {
      this.localValue = this.format(event.target.value, event)

      this.$emit('change', this.localValue)
    },
    onInput (event) {
      const value = event.target.value

      this.localValue = this.format(value, event)
    },
  },
  watch: {
    value (current, prev) {
      if (current !== prev) {
        this.localValue = current
      }
    },
    localValue (current, prev) {
      if (current !== prev) {
        this.$emit('input', current)
      }
    },
  },
}
