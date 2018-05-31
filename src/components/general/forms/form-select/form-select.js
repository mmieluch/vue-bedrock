import FormControlStateMixin from '../../../../mixins/form-control-state'
import FormMixin from '../../../../mixins/form'
import IdMixin from '../../../../mixins/id'

function isObject (obj) {
  return obj && ({}).toString.call(obj) === '[object Object]'
}

function mapObjectToOption (obj, vm) {
  return {
    disabled: obj[vm.disabledProp],
    label: obj[vm.labelProp],
    value: obj[vm.valueProp],
  }
}

function mapValueToOption (val) {
  return {
    disabled: false,
    label: String(val),
    value: val,
  }
}

const renderOption = function (h, option, index) {
  return h('option', {
    attrs: {
      disabled: Boolean(option.disabled),
    },
    domProps: {
      innerHTML: option.label,
      value: option.value,
    },
    key: `option_${index}_opt`,
  })
}

export default {
  render (h) {
    const options = this.computedOptions.map((option, index) => renderOption(h, option, index))

    return h('select', {
      attrs: {
        'aria-invalid': this.computedAriaInvalid,
        'aria-required': this.required ? 'true' : null,
        disabled: this.disabled,
        id: this.safeId(),
        multiple: this.multiple || null,
        name: this.name,
        required: this.required,
        size: this.computedSelectSize,
      },
      class: this.formControlStateClass,
      directives: [
        {
          name: 'model',
          rawName: 'v-model',
          value: this.localValue,
          expression: 'localValue',
        }
      ],
      on: {
        change: this.onChange,
      },
      ref: 'input',
    }, [this.$slots.first, options, this.$slots.default]
  )},
  mixins: [
    FormControlStateMixin,
    FormMixin,
    IdMixin,
  ],
  props: {
    ariaInvalid: {
      type: [Boolean, String],
      default: false,
    },
    disabledProp: {
      type: String,
      default: 'disabled',
    },
    labelProp: {
      type: String,
      default: 'label',
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    size: {
      type: Number,
      default: null,
    },
    options: {
      type: Array,
      default: () => ([]),
    },
    value: {},
    valueProp: {
      type: String,
      default: 'value',
    },
  },
  data () {
    return {
      localValue: this.value,
    }
  },
  computed: {
    computedAriaInvalid () {
      if (this.ariaInvalid === true || this.ariaInvalid === 'true') {
        return 'true'
      }
      return this.stateClass === 'is-invalid' ? 'true' : null
    },
    inputClass () {
      return [
        this.formControlStateClass,
      ]
    },
    computedOptions () {
      const options = this.options
      const vm = this

      if (Array.isArray(options)) {
        return options.map(o => isObject(o) ? mapObjectToOption(o, vm) : mapValueToOption(o))
      }
    },
    computedSelectSize () {
      return this.size === 0 ? null : this.size
    },
  },
  methods: {
    onChange (event) {
      const selectedVal = Array.from(event.target.options)
        .filter(o => o.selected)
        .map(o => ('_value' in o ? o._value : o.value))
      this.localValue = event.target.multiple ? selectedVal : selectedVal[0]
      this.$emit('change', this.localValue)
    },
  },
  watch: {
    value (current) {
      this.localValue = current
    },
    localValue () {
      this.$emit('input', this.localValue)
    },
  },
}
