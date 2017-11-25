<template>
  <div>
    <div class="row">
      <div class="cell">
        <h1>Form Input</h1>
      </div>
    </div>
    <div class="row">
      <div class="cell">
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
