import { arrayIncludes } from 'bootstrap-vue/src/utils/array'

const ALIGNMENTS = ['left', 'center', 'right']

function computeClassNames (props) {
  return {
    menu: true,

    dropdown: props.dropdown,
    expanded: props.expanded,
    simple: props.simple,
    vertical: props.vertical,

    'align-center': props.align === 'center',
    'align-right': props.align === 'right',
  }
}

export default {
  functional: true,
  render (h, { children, props }) {
    return h('ul', {
      class: computeClassNames(props),
    }, children)
  },
  props: {
    align: {
      type: String,
      default: 'left',
      validator: value => arrayIncludes(ALIGNMENTS, value),
    },
    dropdown: {
      type: Boolean,
      default: false,
    },
    expanded: {
      type: Boolean,
      default: false,
    },
    simple: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
}
