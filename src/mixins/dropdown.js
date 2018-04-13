/**
 * Heavily inspired by BootstrapVue's dropdown mixin:
 * @see https://github.com/bootstrap-vue/bootstrap-vue/blob/v2.0.0-rc.6/src/mixins/dropdown.js
 */

export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    popperOpts: {
      type: Object,
      default: () => ({}),
    },
  },
  data () {
    return {
      visible: false,
    }
  },
}
