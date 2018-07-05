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
    formControlLabelStateClass () {
      return this.state === false ? 'is-invalid-label' : null
    },
    formControlWrapperStateClass () {
      return this.state === false ? 'has-invalid-input' : null
    },
  },
}
