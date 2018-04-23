// Threshold of limit size when we start/stop showing ellipsis
const ELLIPSIS_THRESHOLD = 3

const props = {
  ariaLabel: {
    type: String,
    default: 'Pagination',
  },
  centered: {
    type: Boolean,
    default: false,
  },
  firstText: {
    type: String,
    default: '&laquo;',
  },
  hideEllipsis: {
    type: Boolean,
    default: false,
  },
  hideGoToEndButtons: {
    type: Boolean,
    default: false,
  },
  labelFirstPage: {
    type: String,
    default: 'First page',
  },
  labelLastPage: {
    type: String,
    default: 'Last page',
  },
  labelNextPage: {
    type: String,
    default: 'Next page',
  },
  labelPage: {
    type: String,
    default: 'Go to page',
  },
  labelPrevPage: {
    type: String,
    default: 'Previous page',
  },
  lastText: {
    type: String,
    default: '&raquo;',
  },
  limit: {
    type: Number,
    default: 5,
  },
  nextText: {
    type: String,
    default: '&rsaquo;',
  },
  perPage: {
    type: Number,
    default: 20,
  },
  prevText: {
    type: String,
    default: '&lsaquo;',
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

export default {
  name: 'vbPagination',
  render (h) {

    const listProps = {
      class: 'pagination',
    }
    const navProps = {
      attrs: {
        'aria-label': this.ariaLabel,
      },
    }

    return h('nav', navProps, [
      h('ul', listProps, [])
    ])
  },
  props,
  computed: {
    numberOfPages () {
      const result = Math.ceil(this.totalRows / this.perPage)

      return result < 1 ? 1 : result
    },
  },
}
