import Link, { propsFactory as linkPropsFactory } from '../../controls/link/link'

const props = linkPropsFactory()

export default {
  functional: true,
  props,
  render (h, { props, data, children }) {
    return h(
      'li',
      data,
      [
        h(Link, { props }, children),
      ]
    )
  }
}
