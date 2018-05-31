export default {
  props: {
    state: {
      type: Boolean,
      default: null,
    },
  },
  computed: {
    formControlStateClass () {
      return this.state === false ? 'is-invalid-input' : null
    },
  },
}
