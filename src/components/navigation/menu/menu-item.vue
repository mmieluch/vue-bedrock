<template>
  <li :class="computedClass">
    <a v-if="isLink" :href="computedHref">{{ label }}</a>
    <template v-else>{{ label }}</template>
  </li>
</template>

<script>
  import get from 'lodash.get'
  import isEmpty from 'lodash.isempty'
  import RouterLink from '../../../mixins/router-link'

  export default {
    name: 'vbMenuItem',
    mixins: [
      RouterLink,
    ],
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      href: {
        type: String,
      },
      label: {
        type: String,
        required: true,
      },
      to: {
        type: [String, Object],
      },
    },
    computed: {
      computedClass () {
        const computedClass = []

        if (!this.isLink) {
          computedClass.push('menu-text')
        }

        return computedClass
      },
      computedHref () {
        if (!this.isLink) {
          return
        }

        if (this.isRouterLink) {
          return this.computedRouterHref
        }

        return this.href
      },
      computedType () {
        return get(this.item, 'type', 'link')
      },
      isLink () {
        if (this.disabled) {
          return false
        }

        return !isEmpty(this.href) || this.isRouterLink
      },
    },
  }
</script>
