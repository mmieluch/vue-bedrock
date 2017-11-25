export default {
  props: {
    name: String,
    id: String,
    disabled: Boolean,
    required: {
      type: Boolean,
      default: false,
    },
  },
}
