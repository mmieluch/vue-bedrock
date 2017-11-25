<template>
  <input />
</template>

<script>
  // Supported input types.
  const SUPPORTED_TYPES = [
    'text', 'date', 'datetime', 'datetime-local', 'email', 'month',
    'number', 'password', 'search', 'tel', 'time', 'url', 'week',
  ]

  export default {
    name: 'FormInput',
    props: {
      value: {
        default: null,
      },
    },
  }
</script>
