<template>
  <article>
    <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div class="cell">
          <Callout coloring="success">
            <h5>Foo</h5>
            <p>bar</p>
          </Callout>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
  import Callout from '../../src/components/containers/callout'

  export default {
    name: 'Foo',
    layout: 'default',
    components: {
      Callout,
    },
  }
</script>

<style scoped>
  article {
    margin: 3rem;
  }
</style>
