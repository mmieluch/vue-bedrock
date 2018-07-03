import { arrayIncludes } from 'bootstrap-vue/src/utils/array'

const GUTTER_TYPES = ['margin', 'padding']

const LABEL_ALIGNMENTS = ['left', 'center', 'right']

export default {
  props: {
    gutters: {
      type: String,
      default: null,
      validator: value => arrayIncludes(GUTTER_TYPES, value),
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
    labelFor: {
      type: String,
      default: null,
    },
    labelTextAlign: {
      type: String,
      default: 'left',
      validator: value => arrayIncludes(LABEL_ALIGNMENTS, value),
    },
  },
}
