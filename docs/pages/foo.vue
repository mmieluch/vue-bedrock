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
          <vb-menu>
            <li>foo</li>
            <li>bar</li>
          </vb-menu>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
  import vbCallout from '../../src/components/containers/callout/callout'
  import vbMenu from '../../src/components/navigation/menu/menu'
  import vbLink from '../../src/components/controls/link/link'

  export default {
    name: 'Foo',
    layout: 'default',
    components: {
      vbCallout,
      vbLink,
      vbMenu,
    },
  }
</script>

<style scoped>
  article {
    margin: 3rem;
  }
</style>
