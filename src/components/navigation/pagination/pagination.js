import vbLink from '../../controls/link/link'
import merge from 'lodash/merge'

// Threshold of limit size when we start/stop showing ellipsis
const ELLIPSIS_THRESHOLD = 3

const props = {
  centered: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  ellipsisText: {
    type: String,
    default: '&hellip;',
  },
  firstText: {
    type: String,
    default: 'First',
  },
  hideEllipsis: {
    type: Boolean,
    default: false,
  },
  hideGoToEndButtons: {
    type: Boolean,
    default: false,
  },
  lastText: {
    type: String,
    default: 'Last',
  },
  limit: {
    type: Number,
    default: 5,
  },
  nextText: {
    type: String,
    default: 'Next',
  },
  perPage: {
    type: Number,
    default: 20,
  },
  prevText: {
    type: String,
    default: 'Previous',
  },
  totalRows: {
    type: Number,
    default: 20,
  },
  value: {
    type: Number,
    default: 1,
  },
}

/**
 * First and last page button factory.
 * @param dir
 * @return {VNode}
 */
function makeExtremes (dir) {
  const vm = this
  const h = this.$createElement
  const pageNum = dir === 'first' ? 1 : this.numberOfPages
  const disabled = this.disabled || this.isActive(pageNum)

  let childAttrs = {
    class: {
      disabled,
    },
    domProps: {
      innerHTML: dir === 'first' ? this.firstText : this.lastText
    },
  }

  const child = disabled
    ? h('span', childAttrs)
    : h('a', merge({}, childAttrs, {
      attrs: this.linkProps(),
      on: {
        click (event) {
          vm.onClick(pageNum, event)
        },
      },
    }))

  return h('li', {
    class: {
      'pagination-first': dir === 'first',
      'pagination-last': dir === 'last',
      'disabled': this.disabled,
    },
  }, [child])
}

/**
 * Prev and next page button factory.
 * @param dir
 * @return {VNode}
 */
function makePrevOrNext (dir) {
  const vm = this
  const h = this.$createElement
  const pageNum = dir === 'prev' ? this.prevPage : this.nextPage
  const disabled = this.disabled || pageNum === null

  let childAttrs = {
    class: {
      disabled,
    },
    domProps: {
      innerHTML: dir === 'prev' ? this.prevText : this.nextText,
    },
  }

  const child = disabled
    ? h('span', childAttrs)
    : h('a', merge({}, childAttrs, {
      attrs: this.linkProps(),
      on: {
        click (event) {
          vm.onClick(pageNum, event)
        },
      },
    }))

  return h('li', {
    class: {
      'pagination-previous': dir === 'prev',
      'pagination-next': dir === 'next',
      'disabled': this.disabled,
    },
  }, [child])
}

function makeEllipsis () {
  return this.$createElement('li', {
    attrs: {
      'aria-hidden': true,
    },
    class: ['ellipsis'],
  })
}

export default {
  name: 'vbPagination',
  render (h) {
    const buttons = []

    buttons.push(this.hideGoToEndButtons ? h(false) : makeExtremes.call(this, 'first'))
    buttons.push(this.hideGoToEndButtons ? h(false) : makePrevOrNext.call(this, 'prev'))

    buttons.push(this.hideGoToEndButtons ? h(false) : makePrevOrNext.call(this, 'next'))
    buttons.push(this.hideGoToEndButtons ? h(false) : makeExtremes.call(this, 'last'))

    const listProps = {
      attrs: {
        role: 'menubar',
      },
      class: ['pagination', 'vb-pagination'],
    }
    const navProps = {}

    return h('nav', navProps, [
      h('ul', listProps, [
        buttons,
      ]),
    ])
  },
  components: {
    vbLink,
  },
  props,
  data () {
    return {
      currentPage: this.value,
    }
  },
  computed: {
    nextPage () {
      return this.currentPage === this.numberOfPages ? null : this.currentPage + 1
    },
    numberOfPages () {
      const result = Math.ceil(this.totalRows / this.perPage)

      return result < 1 ? 1 : result
    },
    pageList () {

    },
    prevPage () {
      return this.currentPage === 1 ? null : this.currentPage - 1
    },
    showFirstDots () {
      if (this.hideEllipsis) return false

      if (
        this.numberOfPages - this.currentPage + 2 < this.limit &&
        this.limit > ELLIPSIS_THRESHOLD
      ) return true

      return false
    },
  },
  methods: {
    isActive (pageNum) {
      return pageNum === this.currentPage
    },
    linkProps () {
      return {
        href: '#',
      }
    },
    onClick (num, event) {
      event.preventDefault()

      if (num > this.numberOfPages) {
        num = this.numberOfPages
      } else if (num < 1) {
        num = 1
      }

      this.currentPage = num

      this.$nextTick(() => {
        const target = event.target
        target.focus()
        this.$emit('change', this.currentPage)
      })
    },
  },
}
