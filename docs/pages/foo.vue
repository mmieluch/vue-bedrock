<template>
  <article>
    <div class="grid-container">
      <div class="cell">
        <vb-pagination v-bind="pagination" />
      </div>
    </div>
  </article>
</template>

<script>
  import vbPagination from '../../src/components/navigation/pagination/pagination'

  export default {
    name: 'Foo',
    layout: 'default',
    components: {
      vbPagination,
    },
    data () {
      return {
        pagination: {
          limit: 3,
          perPage: 1,
          totalRows: 20,
          value: 1,
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
