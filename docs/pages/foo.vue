<template>
  <article>
    <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div class="cell">
          <vb-callout coloring="success" size="large" :closable="true">
            <h5>Foo</h5>
            <p>bar</p>
          </vb-callout>
        </div>
      </div>
      <div class="grid-x grid-margin-x">
        <div class="cell">
          <vb-menu :items="menuItems" :vertical="true" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
  import vbCallout from '../../src/components/containers/callout/callout'
  import vbMenu from '../../src/components/navigation/menu/menu'

  export default {
    name: 'Foo',
    layout: 'default',
    components: {
      vbCallout,
      vbMenu,
    },
    data () {
      return {
        menuItems: [
          { label: 'One', to: '/one' },
          { label: 'Two', to: { path: '/two' } },
          { label: 'Three', to: { name: 'three' } },
          { label: 'Four', disabled: true },
          { label: 'Five', href: '/' },
          { label: 'Six', href: '/', disabled: true },
        ],
      }
    },
  }
</script>

<style scoped>
  article {
    margin: 3rem;
  }
</style>
