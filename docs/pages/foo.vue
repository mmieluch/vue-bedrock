<template>
  <article>
    <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div class="cell">
          <vb-menu>
            <vb-menu-item :to="to">One</vb-menu-item>
            <vb-menu-text>Text</vb-menu-text>
            <vb-menu-item-dropdown>
              <vb-menu-item :to="to">One</vb-menu-item>
              <vb-menu-text>Text</vb-menu-text>
            </vb-menu-item-dropdown>
          </vb-menu>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
  import vbMenu from '../../src/components/navigation/menu/menu'
  import vbLink from '../../src/components/controls/link/link'
  import vbMenuItem from '../../src/components/navigation/menu/menu-item'
  import vbMenuItemDropdown from '../../src/components/navigation/menu/menu-item-dropdown'
  import vbMenuText from '../../src/components/navigation/menu/menu-text'

  export default {
    name: 'Foo',
    layout: 'default',
    components: {
      vbLink,
      vbMenu,
      vbMenuItem,
      vbMenuItemDropdown,
      vbMenuText,
    },
    data () {
      return {
        to: {
          name: 'foo',
          query: {
            foo: 'bar',
          },
        },
      }
    },
  }
</script>

<style scoped>
  article {
    margin: 3rem;
  }
</style>
