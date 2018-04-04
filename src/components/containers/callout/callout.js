import { variants } from '../../../settings'

export default {
  name: 'vbCallout',
  render (h) {
    return h(
      'div', {
        'class': [
          'callout',
          this.computedColoringClass,
        ],
        domProps: {
          innerHTML: 'callout',
        },
      }, [
        this.$slots.default,
      ],
    )
  },
  props: {
    coloring: {
      type: String,
      default: null,
      validator: variant => variants.includes(variant),
    },
  },
  computed: {
    computedColoringClass () {
      return typeof this.coloring === 'string' ? this.coloring : null
    },
  },
}
