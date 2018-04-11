<template>
  <li :class="computedClass">
    <span v-if="isDisabled">{{ item.label }}</span>
    <a v-else href="#">{{ item.label }}</a>
  </li>
</template>

<script>
  import get from 'lodash.get'
  import isEmpty from 'lodash.isempty'

  export default {
    name: 'vbMenuItem',
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
    computed: {
      computedClass () {
        return [
          this.isDisabled ? 'menu-text' : null,
        ].filter(item => !isEmpty(item))
      },
      isDisabled () {
        return get(this.item, 'disabled', false)
      },
    },
  }
</script>
