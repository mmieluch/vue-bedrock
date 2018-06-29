import { variants } from '../../settings'
import vbButtonClose from '../button-close/button-close'

const sizes = ['small', 'large']

export default {
  name: 'vbCallout',
  render (h) {
    if (!this.localVisible) return h(false)

    const closeBtn = h('vbButtonClose', {
      on: {
        click: this.close,
      },
    })

    return h(
      'div', {
        'class': [
          'callout',
          this.computedColoringClass,
          this.computedSizeClass,
        ],
      }, [
        this.closable ? closeBtn : null,
        this.$slots.default,
      ],
    )
  },
  components: {
    vbButtonClose,
  },
  props: {
    closable: Boolean,
    coloring: {
      type: String,
      validator: variant => variants.includes(variant),
    },
    size: {
      type: String,
      validator: size => sizes.includes(size),
    },
  },
  data () {
    return {
      localVisible: true,
    }
  },
  computed: {
    computedColoringClass () {
      return typeof this.coloring === 'string' ? this.coloring : null
    },
    computedSizeClass () {
      return typeof this.size === 'string' ? this.size : null
    },
  },
  methods: {
    close (e) {
      e.preventDefault()
      e.stopPropagation()

      this.localVisible = false
    },
  },
}
