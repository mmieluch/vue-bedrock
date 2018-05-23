import formMixin from '../../../../mixins/form'
import formControlStateMixin from '../../../../mixins/form-control-state'
import idMixin from '../../../../mixins/id'

export default {
  mixins: [
    formControlStateMixin,
    formMixin,
    idMixin,
  ],
  render (h) {
    return h('textarea', {
      attrs: {
        id: this.safeId(),
        name: this.name,
        disabled: this.disabled,
        placeholder: this.placeholder,
        required: this.required,
        autocomplete: this.autocomplete || null,
        readonly: this.readonly,
        rows: this.rowsCount,
        wrap: this.wrap || null,
        'aria-required': this.required ? 'true' : null,
        'aria-invalid': this.computedAriaInvalid,
      },
      class: this.inputClass,
      directives: [
        {
          name: 'model',
          rawName: 'v-model',
          value: this.localValue,
          expression: 'localValue',
        },
      ],
      domProps: {
        value: this.value,
      },
      on: {
        input: e => {
          this.localValue = e.target.value
        },
      },
      ref: 'input',
      style: this.inputStyle,
    })
  },
  props: {
    ariaInvalid: {
      type: [Boolean, String],
      default: false,
    },
    autocomplete: {
      type: String,
      default: null,
    },
    maxRows: {
      type: [Number, String],
      default: null,
    },
    noResize: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: null,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    rows: {
      type: [Number, String],
      default: null,
    },
    value: {
      type: String,
      default: '',
    },
    wrap: {
      // 'soft', 'hard' or 'off'. Browser default is 'soft'
      type: String,
      default: 'soft',
    },
  },
  data () {
    return {
      localValue: this.value,
    }
  },
  computed: {
    computedAriaInvalid () {
      if (!this.ariaInvalid || this.ariaInvalid === 'false') {
        // this.ariaInvalid is null or false or 'false'
        return this.computedState === false ? 'true' : null
      }
      if (this.ariaInvalid === true) {
        // User wants explicit aria-invalid=true
        return 'true'
      }
      // Most likely a string value (which could be the string 'true')
      return this.ariaInvalid
    },
    inputClass () {
      return [
        this.sizeFormClass,
        this.stateClass,
      ]
    },
    inputStyle () {
      // Setting noResize to true will disable the ability for the user to resize the textarea
      return {
        resize: this.noResize ? 'none' : null,
      }
    },
    rowsCount () {
      const rows = parseInt(this.rows, 10) || 1
      const maxRows = parseInt(this.maxRows, 10) || 0
      const lines = (this.localValue || '').toString().split('\n').length
      return maxRows
        ? Math.min(maxRows, Math.max(rows, lines))
        : Math.max(rows, lines)
    },
  },
  methods: {
    focus () {
      // For external handler that may want a focus method.
      if (!this.disabled) {
        this.$el.focus()
      }
    },
  },
  watch: {
    value (current, prev) {
      if (current !== prev) {
        this.localValue = current
      }
    },
    localValue (current, prev) {
      // Update parent value.
      if (current !== prev) {
        this.$emit('input', current)
      }
    },
  },
}
