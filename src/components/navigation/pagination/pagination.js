import merge from 'lodash.merge'

// Threshold of limit size when we start/stop showing ellipsis
const ELLIPSIS_THRESHOLD = 2

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
    validator: limit => limit % 2 !== 0,
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

function makePageButton (pageNum) {
  const vm = this
  const h = this.$createElement
  const isCurrent = this.isActive(pageNum)
  let children = []

  if (isCurrent) {
    children.push(h('span', {
      class: 'show-for-sr',
      domProps: {
        innerHTML: `You're on page `,
      },
    }))
    children.push(h('span', {
      domProps: {
        innerHTML: pageNum,
      },
    }))
  } else {
    children.push(h('a', {
      attrs: {
        'aria-label': `Page ${pageNum}`,
        href: '#',
      },
      domProps: {
        innerHTML: pageNum,
      },
      on: {
        click (event) {
          vm.onClick(pageNum, event)
        },
      },
    }))
  }

  return h('li', {
    class: {
      current: isCurrent,
    },
  }, children)
}

export default {
  name: 'vbPagination',
  render (h) {
    const buttons = []

    buttons.push(this.hideGoToEndButtons ? h(false) : makeExtremes.call(this, 'first'))
    buttons.push(this.hideGoToEndButtons ? h(false) : makePrevOrNext.call(this, 'prev'))
    buttons.push(this.showFirstDots ? makeEllipsis.call(this) : h(false))

    this.pageList.forEach(pageNum => {
      buttons.push(makePageButton.call(this, pageNum))
    }, this)

    buttons.push(this.showLastDots ? makeEllipsis.call(this) : h(false))
    buttons.push(this.hideGoToEndButtons ? h(false) : makePrevOrNext.call(this, 'next'))
    buttons.push(this.hideGoToEndButtons ? h(false) : makeExtremes.call(this, 'last'))

    const listProps = {
      attrs: {
        role: 'menubar',
      },
      class: ['pagination', 'vb-pagination'],
    }

    return h('ul', listProps, [
      buttons,
    ])
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
      let pages = []
      const limit = this.limit > this.numberOfPages ? this.numberOfPages : this.limit

      let start = this.currentPage - limit
      let end = this.currentPage + limit
      let perSide = Math.floor((limit - 1) / 2)

      for (let i = start; i < this.currentPage; i++) {
        pages.push(i)
      }

      pages.push(this.currentPage)

      for (let i = this.currentPage + 1; i <= end; i++) {
        pages.push(i)
      }

      let startIndex = pages.findIndex(page => page === this.currentPage - perSide)

      while (pages[startIndex] < 1) {
        startIndex++
      }

      let endIndex = startIndex + limit

      while (pages[endIndex] > this.numberOfPages + 1) {
        startIndex--
        endIndex--
      }

      return pages.slice(startIndex, endIndex)
    },
    prevPage () {
      return this.currentPage === 1 ? null : this.currentPage - 1
    },
    showFirstDots () {
      if (this.hideEllipsis) return false

      const numPagesBeforeCurrent = this.currentPage - 1

      return numPagesBeforeCurrent > ELLIPSIS_THRESHOLD
    },
    showLastDots () {
      if (this.hideEllipsis) return false

      const numPagesAfterCurrent = this.numberOfPages - this.currentPage

      return numPagesAfterCurrent > ELLIPSIS_THRESHOLD
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
    normalizeCurrentPage (value) {
      if (value < 1) {
        return 1
      }

      if (value > this.numberOfPages) {
        return this.numberOfPages
      }

      return value
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
  created () {
    this.currentPage = this.normalizeCurrentPage(this.currentPage)
  },
}
