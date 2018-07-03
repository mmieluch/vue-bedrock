import FormMixin from '../../mixins/form'
import FormControlStateMixin from '../../mixins/form-control-state'
import FormInvalidFeedbackMixin from '../../mixins/form-invalid-feedback'
import FormLabelMixin from '../../mixins/form-label'
import IdMixin from '../../mixins/id'

export default {
  mixins: [
    FormControlStateMixin,
    FormInvalidFeedbackMixin,
    FormLabelMixin,
    FormMixin,
    IdMixin,
  ],
  render () {
    const input = this.renderInput()

    if (this.isLabelRenderable) {
      return this.renderRow(input)
    }

    return input
  },
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    inputColClass: {
      type: [Array, String],
      default: () => ['cell', 'shrink'],
    },
    labelColClass: {
      type: [Array, String],
      default: () => ['cell', 'auto'],
    },
    rowClass: {
      type: [Array, String],
      default: () => ['grid-x', 'grid-padding-x'],
    },
    rowId: {
      type: String,
    },
  },
  data () {
    return {
      localChecked: this.checked,
    }
  },
  computed: {
    isLabelRenderable () {
      return this.label.length || this.$slots.default
    },
  },
  methods: {
    onChange (e) {
      this.localChecked = e.target.checked
    },
    renderInput () {
      return this.$createElement('input', {
        attrs: {
          'aria-required': this.required ? 'true' : null,
          autocomplete: 'off',
          disabled: this.disabled,
          id: this.safeId(),
          name: this.name,
          required: this.required,
          type: 'checkbox',
        },
        class: [
          this.formControlStateClass,
        ],
        directives: [
          {
            name: 'model',
            rawName: 'v-model',
            value: this.localChecked,
            expression: 'localChecked',
          }
        ],
        domProps: {
          checked: this.localChecked,
        },
        on: {
          change: this.onChange,
        },
        ref: 'check',
      })
    },
    renderLabel () {
      const labelProps = {
        attrs: {
          for: this.safeId(),
        },
        class: this.computedLabelClassNames,
      }
      const labelChildren = []

      if (this.$slots.default) {
        labelChildren.push(this.$slots.default)
      } else {
        labelProps.domProps = {
          innerHTML: this.label,
        }
      }

      return this.$createElement('label', labelProps, labelChildren)
    },
    renderRow (input) {
      const h = this.$createElement

      return h('div', {
        attrs: {
          id: this.rowId,
        },
        class: ['grid-x', 'grid-padding-x'],
      }, [
        h('div', { class: this.inputColClass }, [input]),
        h('div', { class: this.labelColClass }, [
          this.renderLabel(),
          this.renderInvalidFeedback(),
        ]),
      ])
    }
  },
  watch: {
    checked (value) {
      this.localValue = value
    },
    localChecked () {
      this.$emit('change', this.localChecked)
    },
  },
}
