<template>
  <article>
    <Callout />
  </article>
</template>

<script>
  import Callout from '../../src/components/callout'

  export default {
    name: 'Foo',
    layout: 'default',
    components: {
      Callout,
    },
  }
</script>
