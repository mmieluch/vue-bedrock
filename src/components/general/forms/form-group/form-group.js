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

    const formControlCol = h('div', {
      class: ['cell', 'auto'],
    }, [this.$slots.default])

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
    horizontal: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
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
  },
  computed: {
    computedLabelClassNames () {
      return [
        `text-${this.labelTextAlign}`,
        this.labelMiddle ? 'middle' : null,
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
