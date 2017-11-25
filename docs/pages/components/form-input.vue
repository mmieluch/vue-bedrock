<template>
  <div>
    <div class="grid-x">
      <div class="cell">
        <h1>Form Input</h1>
      </div>
    </div>
    <div class="grid-x">
      <div class="cell small-12 medium-8 large-6">
        <FormInput />
      </div>
    </div>
  </div>
</template>

<script>
  import FormInput from '~~/src/components/form-input'

  export default {
    name: 'Page--FormInput',
    components: { FormInput },
  }
</script>
