export default {
  name: 'vbButtonClose',
  functional: true,
  render (h, { listeners }) {
    const content = h('span', {
      attrs: {
        'aria-hidden': true,
      },
      domProps: {
        innerHTML: '&times;',
      },
    })

    return h('button', {
      attrs: {
        type: 'button',
      },
      'class': [
        'close-button',
      ],
      on: {
        click: typeof listeners['click'] === 'function' ? listeners.click : () => {},
      },
    }, [content])
  },
}
