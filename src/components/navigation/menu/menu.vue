<template>
  <ul :class="computedClass">
    <vb-menu-item v-for="item in computedItems"
                  :key="item.vbKey"
                  v-bind="item" />
  </ul>
</template>

<script>
  import vbMenuItem from './menu-item.vue'
  import uuid from 'uuid'
  import merge from 'lodash.merge'

  const ALIGNMENTS = ['left', 'center', 'right']

  export default {
    name: 'vbMenu',
    components: {
      vbMenuItem,
    },
    props: {
      align: {
        type: String,
        default: 'left',
        validator: value => ALIGNMENTS.includes(value),
      },
      items: {
        type: Array,
        default: () => {[]},
      },
    },
    computed: {
      computedClass () {
        const computedClass = ['menu']

        if (this.align !== 'left') {
          computedClass.push(`align-${this.align}`)
        }

        return computedClass
      },
      computedItems () {
        return this.items.map(item => merge({}, item, {
          vbKey: uuid.v4(),
        }))
      },
    },
  }
</script>
