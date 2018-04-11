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
  import propFromAttrs from '../../../utils/prop-from-attrs'

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
      dropdown: {
        type: Boolean,
        default: false,
      },
      expanded: {
        type: Boolean,
        default: false,
      },
      items: {
        type: Array,
        default: () => {[]},
      },
      simple: {
        type: Boolean,
        default: false,
      },
      vertical: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      computedClass () {
        return {
          menu: true,
          'align-center': this.align === 'center',
          'align-right': this.align === 'right',
          dropdown: this.isDropdown,
          expanded: this.isExpanded,
          simple: this.isSimple,
          vertical: this.isVertical,
        }
      },
      computedItems () {
        return this.items.map(item => merge({}, item, {
          vbKey: uuid.v4(),
        }))
      },
      isDropdown () {
        return propFromAttrs(this, 'dropdown')
      },
      isExpanded () {
        return propFromAttrs(this, 'expanded')
      },
      isSimple () {
        return propFromAttrs(this, 'simple')
      },
      isVertical () {
        return propFromAttrs(this, 'vertical')
      },
    },
  }
</script>
