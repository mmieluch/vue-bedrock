import { variants } from '../../../settings'

const sizes = ['small', 'large']

export default {
  name: 'vbCallout',
  render (h) {
    return h(
      'div', {
        'class': [
          'callout',
          this.computedColoringClass,
          this.computedSizeClass,
        ],
      }, [
        this.$slots.default,
      ],
    )
  },
  props: {
    coloring: {
      type: String,
      validator: variant => variants.includes(variant),
    },
    size: {
      type: String,
      validator: size => sizes.includes(size),
    },
  },
  computed: {
    computedColoringClass () {
      return typeof this.coloring === 'string' ? this.coloring : null
    },
    computedSizeClass () {
      return typeof this.size === 'string' ? this.size : null
    },
  },
}
