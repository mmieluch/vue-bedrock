<template>
  <article>
    <div class="grid-container">
      <div class="grid-x">
        <div class="cell">
          <FormTextarea :state="false" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
  import FormTextarea from '../../src/components/form-textarea/form-textarea'

  export default {
    name: 'Foo',
    layout: 'default',
    components: {
      FormTextarea,
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
