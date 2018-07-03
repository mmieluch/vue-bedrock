<template>
  <article>
    <div class="grid-container">
      <div class="grid-x">
        <div class="cell">
          <Checkbox v-model="checked"
                    :state="false"
                    id="foobar" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
  import Checkbox from '../../src/components/form-checkbox/form-checkbox'

  export default {
    name: 'Foo',
    layout: 'default',
    components: {
      Checkbox,
    },
    data () {
      return {
        checked: false,
      }
    },
  }
</script>

<style scoped>
  article {
    margin: 3rem;
  }
</style>
