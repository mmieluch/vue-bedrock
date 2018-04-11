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
    </div>
  </article>
</template>

<script>
  import VbCallout from '../../src/components/containers/callout/callout'

  export default {
    name: 'Foo',
    layout: 'default',
    components: {
      VbCallout,
    },
  }
</script>

<style scoped>
  article {
    margin: 3rem;
  }
</style>
