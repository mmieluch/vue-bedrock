<template>
  <article>
    <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div class="cell">
          <Callout>Foobar</Callout>
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
