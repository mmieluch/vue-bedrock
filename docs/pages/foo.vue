<template>
  <article>
    <div class="grid-container">
      <div class="grid-x">
        <div class="cell">
          <FormFile v-model="model" :state="Boolean(model)" placeholder="Choose a file..." />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
  import FormFile from '../../src/components/form-file/form-file'

  export default {
    name: 'Foo',
    layout: 'default',
    components: {
      FormFile,
    },
    data () {
      return {
        model: null,
      }
    },
  }
</script>

<style scoped>
  article {
    margin: 3rem;
  }
</style>
