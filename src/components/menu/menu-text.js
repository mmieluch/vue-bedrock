export default {
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'span',
    },
  },
  render (h, { props, children }) {
    return h('li', {
      staticClass: 'menu-text',
    }, [
      h(props.tag, [children])
    ])
  },
}
