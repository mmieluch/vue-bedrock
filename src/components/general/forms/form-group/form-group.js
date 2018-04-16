import IdMixin from '../../../../mixins/id'
import { arrayIncludes } from 'bootstrap-vue/src/utils/array'

const LABEL_ALIGNMENTS = ['left', 'center', 'right']

export default {
  name: 'vbFormGroup',
  render (h) {
    const label = h('label', {
      attrs: {
        for: this.labelFor,
      },
      class: this.computedLabelClassNames,
      domProps: {
        innerHTML: this.label,
      },
    })
    const labelCol = h('div', {
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
        return h('p', {
          class: ['form-error', 'is-visible'],
          domProps: {
            innerHTML: this.invalidFeedback,
          },
        })
      }
    }.bind(this)

    const formControlCol = h('div', {
      class: ['cell', 'auto'],
    }, [
      this.$slots.default,
      this.state === false ? renderInvalidFeedback() : false,
      renderDescription(),
    ])

    return h(
      'div', {
        class: ['vb-form-group', 'grid-x'],
      }, [
        labelCol,
        formControlCol,
      ]
    )
  },
  mixins: [
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
    invalidFeedback: {
      type: String,
    },
    label: {
      type: String,
      default: '',
    },
    labelClass: {
      type: [Array, String],
    },
    labelCols: {
      type: Number,
      default: 3,
    },
    labelFor: {
      type: String,
      default: null,
    },
    labelMiddle: {
      type: Boolean,
      default: false,
    },
    labelTextAlign: {
      type: String,
      default: 'left',
      validator: value => arrayIncludes(LABEL_ALIGNMENTS, value),
    },
    state: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    computedLabelClassNames () {
      const classNames = [
        `text-${this.labelTextAlign}`,
      ]

      if (Array.isArray(this.labelClass)) {
        classNames.push(...this.labelClass)
      }

      if (typeof this.labelClass === 'string') {
        classNames.push(...this.labelClass.split(' '))
      }

      if (this.labelMiddle) {
        classNames.push('middle')
      }

      if (this.state === false) {
        classNames.push('is-invalid-label')
      }

      return classNames
    },
    computedLabelColsClassNames () {
      return [
        'cell',
        this.horizontal ? `${this.breakpoint}-${this.labelCols}` : 'small-12',
      ]
    },
  },
}
