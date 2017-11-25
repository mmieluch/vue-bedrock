<script>
  import formMixin from '~~/src/mixins/form'

  // Supported input types.
  const SUPPORTED_TYPES = [
    'text', 'date', 'datetime', 'datetime-local', 'email', 'month',
    'number', 'password', 'search', 'tel', 'time', 'url', 'week',
  ]

  export default {
    name: 'FormInput',
    mixins: [formMixin],
    props: {
      ariaInvalid: {
        type: [Boolean, String],
        default: false,
      },
      autocomplete: {
        type: String,
        default: null,
      },
      plaintext: {
        type: Boolean,
        default: false,
      },
      readonly: {
        type: Boolean,
        default: false,
      },
      type: {
        type: String,
        default: 'text',
        validate: type => SUPPORTED_TYPES.includes(type),
      },
      value: {
        default: null,
      },
    },
    computed: {
      inputClass () {
        return null
      },
    },
    methods: {
      onInput () {},
      onChange () {},
    },
    render (h) {
      return h(
        'input',
        {
          ref: 'input',
          class: this.inputClass,
          attrs: {
            'aria-required': this.required ? 'true' : null,
            autocomplete: this.autocomplete || null,
            disabled: this.disabled,
            name: this.name,
            placeholder: this.placeholder,
            readonly: this.readonly || this.plaintext,
            required: this.required,
            type: this.type,
          },
          on: {
            input: this.onInput,
            change: this.onChange,
          },
        }
      )
    },
  }
</script>
