import isEmpty from 'lodash.isempty'

export default {
  props: {
    to: {
      type: [String, Object],
    },
  },
  computed: {
    computedRouterHref () {
      if (!this.isRouterLink) {
        return
      }

      if (typeof this.to === 'string') {
        return this.to
      }

      return this.$router.match(this.to).fullPath
    },
    isRouterLink () {
      return this.computedType === 'link' && !isEmpty(this.to)
    },
  },
}
