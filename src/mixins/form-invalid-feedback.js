export default {
  props: {
    invalidFeedback: {
      type: String,
    },
  },
  methods: {
    renderInvalidFeedback () {
      const h = this.$createElement

      if (this.$slots.invalidFeedback) {
        return this.$slots.invalidFeedback
      }

      if (
        typeof this.invalidFeedback === 'string' &&
        this.invalidFeedback.length
      ) {
        return h('div', {
          class: ['form-error', 'is-visible'],
          domProps: {
            innerHTML: this.invalidFeedback,
          },
        })
      }

      return h(false)
    },
  },
}
