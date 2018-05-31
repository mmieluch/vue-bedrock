/**
 * SSR Safe Client Side ID attribute generation
 *
 * Based on BootstrapVue's ID mixin:
 * @see https://raw.githubusercontent.com/bootstrap-vue/bootstrap-vue/v2.0.0-rc.6/src/mixins/id.js
 */

export default {
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  methods: {
    safeId (suffix = '') {
      const id = this.id || this.localId_ || null

      if (!id) {
        return null
      }

      suffix = String(suffix).replace(/\s+/g, '_')

      return suffix ? id + '_' + suffix : id
    },
  },
  computed: {
    localId_ () {
      if (!this.$isServer && !this.id && typeof this._uid !== 'undefined') {
        return '__VBID__' + this._uid
      }
    },
  },
}
