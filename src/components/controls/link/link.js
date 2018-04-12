/**
 * Shamelessly ripped off of VueBootstrap's <b-link> component.
 * @see https://github.com/bootstrap-vue/bootstrap-vue/blob/v2.0.0-rc.6/src/components/link/link.js
 */

import { mergeData } from 'vue-functional-data-merge'
import { assign, keys } from 'bootstrap-vue/src/utils/object'
import {
  propsFactory as bvPropsFactory
} from 'bootstrap-vue/src/components/link/link'

export function propsFactory () {
  const props = bvPropsFactory()

  // Assign Foundation-specific CSS class names.
  props.activeClass.default = 'is-active'
  props.exactActiveClass = 'is-active'

  return props
}

export const props = propsFactory()

function computeTag (props, parent) {
  return parent.$router && props.to && !props.disabled ? 'router-link' : 'a'
}

function computeRel ({ target, rel }) {
  if (target === '_blank' && rel === null) {
    return 'noopener'
  }
  return rel || null
}

function computeHref ({ disabled, href, to }, tag) {
  if (tag === 'router-link') {
    return
  }

  if (href) {
    return href
  }

  if (to) {
    if (typeof to === 'string') {
      return to
    }

    if (typeof to === 'object' && typeof to.path === 'string') {
      return to.path
    }
  }

  return '#'
}

export const computed = {
  linkProps () {
    let linkProps = {}
    let propKeys = keys(props)

    for (let i = 0; i < propKeys.length; i++) {
      const prop = propKeys[i]
      // Computed Vue getters are bound to the instance.
      linkProps[prop] = this[prop]
    }

    return linkProps
  }
}

function clickHandlerFactory ({ disabled, tag, href, suppliedHandler, parent }) {
  const isRouterLink = tag === 'router-link'

  return function onClick (e) {
    if (disabled && e instanceof Event) {
      // Stop event from bubbling up.
      e.stopPropagation()
      // Kill the event loop attached to this specific EventTarget.
      e.stopImmediatePropagation()
    } else {
      parent.$root.$emit('vb::link::clicked', e)

      if (isRouterLink && e.target.__vue__) {
        e.target.__vue__.$emit('click', e)
      }

      if (typeof suppliedHandler === 'function') {
        suppliedHandler(...arguments)
      }
    }

    if ((!isRouterLink && href === '#') || disabled) {
      // Stop scroll-to-top behavior or navigation.
      e.preventDefault()
    }
  }
}

export default {
  functional: true,
  props: propsFactory(),
  render (h, { props, data, parent, children }) {
    const tag = computeTag(props, parent)
    const eventType = tag === 'router-link' ? 'nativeOn' : 'on'
    const suppliedHandler = (data[eventType] || {}).click
    const handlers = {
      click: clickHandlerFactory({ tag, href, disabled: props.disabled, suppliedHandler, parent })
    }

    const componentData = mergeData(data, {
      class: [
        props.active ? (props.exact ? props.exactActiveClass : props.activeClass) : null,
        props.disabled ? 'disabled' : null,
      ],
      attrs: {
        rel: computeRel(props),
        href: computeHref(props, tag),
        target: props.target,
        tabindex: props.disabled ? '-1' : (data.attrs ? data.attrs.tabindex : null),
        'aria-disabled': (tag === 'a' && props.disabled) ? 'true': null,
      },
      props: assign(props, {
        tag: props.routerTag,
      })
    })

    // If href prop exists on router-link (even undefined or null) it fails working on SSR
    if (!componentData.attrs.href) {
      delete componentData.attrs.href
    }

    // We want to overwrite any click handler since our callback
    // will invoke the supplied handler if !props.disabled
    componentData[eventType] = assign(componentData[eventType] || {}, handlers)

    return h(tag, componentData, children)
  },
}
