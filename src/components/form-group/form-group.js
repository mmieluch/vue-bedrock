import FormControlStateMixin from '../../mixins/form-control-state'
import FormLabelMixin from '../../mixins/form-label'
import IdMixin from '../../mixins/id'

const COLS_NUM = 12

export default {
  name: 'vbFormGroup',
  render (h) {
    const label = h('label', {
      attrs: {
        for: this.labelFor,
      },
      class: [
        ...this.computedLabelClassNames,
        this.labelMiddle ? 'middle' : null,
      ],
      domProps: {
        innerHTML: this.label,
      },
    })
    const labelCol = this.noLabelCol ? h(false) : h('div', {
      class: this.computedLabelColsClassNames,
    }, [label])

    const renderDescription = function () {
      if (this.$slots.description) {
        return this.$slots.description
      }

      if (this.description && typeof this.description === 'string' && this.description.length) {
        return h('p', {
          class: ['help-text'],
          domProps: {
            innerHTML: this.description,
          },
        })
      }
    }.bind(this)

    const renderInvalidFeedback = function () {
      if (this.$slots.invalidFeedback) {
        return this.$slots.invalidFeedback
      }

      if (
        typeof this.invalidFeedback === 'string' &&
        this.invalidFeedback.length
      ) {
        return h('div', {
          class: ['form-error', 'is-visible'],
          domProps: {
            innerHTML: this.invalidFeedback,
          },
        })
      }
    }.bind(this)

    const formControlCol = h('div', {
      class: this.computedInputColClassNames,
    }, [
      this.$slots.default,
      this.state === false ? renderInvalidFeedback() : false,
      renderDescription(),
    ])

    return h(
      'div', {
        attrs: {
          id: this.safeId(),
        },
        class: this.computedClass,
      }, [
        labelCol,
        formControlCol,
      ]
    )
  },
  mixins: [
    FormControlStateMixin,
    FormLabelMixin,
    IdMixin,
  ],
  props: {
    breakpoint: {
      type: String,
      default: 'medium',
    },
    description: {
      type: String,
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
    labelCols: {
      type: Number,
      default: 3,
    },
    labelMiddle: {
      type: Boolean,
      default: false,
    },
    noLabelCol: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedClass () {
      const classNames = ['grid-x']

      switch (this.gutters) {
        case 'margin':
          classNames.push('grid-margin-x')
          break
        case 'padding':
          classNames.push('grid-padding-x')
          break
        case null:
        default:
          break
      }

      return classNames
    },
    computedInputColClassNames () {
      let cols

      if (this.noLabelCol) {
        cols = 12
      } else {
        cols = this.horizontal ? COLS_NUM - this.labelCols : 12
      }

      return [
        'cell',
        this.horizontal ? `${this.breakpoint}-${cols}` : `small-${COLS_NUM}`
      ]
    },
    computedLabelColsClassNames () {
      return [
        'cell',
        this.horizontal ? `${this.breakpoint}-${this.labelCols}` : 'small-12',
      ]
    },
  },
}
