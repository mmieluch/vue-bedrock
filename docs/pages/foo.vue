<template>
  <article>
    <div class="grid-container">
      <div class="grid-x">
        <div class="cell">
          <vb-pagination v-bind="pagination" />
        </div>
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
          perPage: 1,
          totalRows: 3,
          value: 6,
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
