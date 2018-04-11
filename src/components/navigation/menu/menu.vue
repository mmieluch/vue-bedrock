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
  import get from 'lodash.get'

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
      expanded: {
        type: Boolean,
        default: false,
      },
      items: {
        type: Array,
        default: () => {[]},
      },
      vertical: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      computedClass () {
        return [
          'menu',
          this.align !== 'left' ? `align-${this.align}` : null,
          this.isExpanded ? 'expanded' : null,
          this.isVertical ? 'vertical': null,
        ].filter(item => item !== null)
      },
      computedItems () {
        return this.items.map(item => merge({}, item, {
          vbKey: uuid.v4(),
        }))
      },
      isExpanded () {
        return (
          this.expanded === true ||
          get(this.$options.propsData, 'expanded') === ''
        )
      },
      isVertical () {
        return this.vertical === true ||
          get(this.$options.propsData, 'vertical') === ''
      },
    },
  }
</script>
