export default {
  props: {
    id: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      localId_: null
    }
  },
  mounted () {
    if (!this.$isServer && !this.id && this._uid) {
      this.localId_ = `__VBID__${this._uid}_`
    }
  },
  methods: {
    safeId (suffix = '') {
      const id = this.id || this.localId_ || null

      if (!id) return null

      suffix = String(suffix).replace(/\s+/g, '_')

      return suffix ? `${id}_${suffix}` : id
    }
  }
}
