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
