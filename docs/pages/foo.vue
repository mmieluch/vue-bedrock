<template>
  <article>
    <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div class="cell">
          <vb-menu>
            <vb-menu-item :to="to">One</vb-menu-item>
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

  export default {
    name: 'Foo',
    layout: 'default',
    components: {
      vbLink,
      vbMenu,
      vbMenuItem,
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
