<template>
  <input :type="type" />
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
      type: {
        type: String,
        default: 'text',
        validate: type => SUPPORTED_TYPES.includes(type),
      },
      value: {
        default: null,
      },
    },
  }
</script>
