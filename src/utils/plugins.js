/**
 * Register a component plugin as being loaded.
 *
 * @param {object} Vue
 * @param {string} name - Component name
 * @param {object} def - Component definition
 */
export function registerComponent (Vue, name, def) {
  Vue._vue_bedrock_components_ = Vue._vue_bedrock_components_ || {}

  if (!Vue._vue_bedrock_components_[name] && def && name) {
    Vue._vue_bedrock_components_[name] = true
    Vue.component(name, def)
  }
}

/**
 * Register a group of components as being loaded.
 * @param {object} Vue
 * @param {object} components - Object of component definitions.
 */
export function registerComponents (Vue, components) {
  for (let component in components) {
    registerComponent(Vue, component, components[component])
  }
}

/**
 * Install plugin if window.Vue available
 * @param {object} VuePlugin - Plugin definition
 */
export function vueUse (VuePlugin) {
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VuePlugin)
  }
}
