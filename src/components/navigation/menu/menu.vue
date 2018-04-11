<template>
  <ul class="menu">
    <vb-menu-item v-for="item in computedItems"
                  :key="item.vbKey"
                  v-bind="item" />
  </ul>
</template>

<script>
  import vbMenuItem from './menu-item.vue'
  import uuid from 'uuid'
  import merge from 'lodash.merge'

  export default {
    name: 'vbMenu',
    components: {
      vbMenuItem,
    },
    props: {
      items: {
        type: Array,
        default: () => {[]},
      },
    },
    computed: {
      computedItems () {
        return this.items.map(item => merge({}, item, {
          vbKey: uuid.v4(),
        }))
      },
    },
  }
</script>
