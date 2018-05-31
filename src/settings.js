/**
 * Prefix used when generating some internal properties.
 * @const {string}
 */
export const prefix = '__VB__'

/**
 * Array of common component colouring variants.
 * @type {string[]}
 */
export const variants = ['primary', 'secondary', 'success', 'warning', 'alert']

/**
 * @typedef {{}} VueBedrockSettings
 * @property {string} prefix
 * @property {string[]} variants
 */
/**
 * @type VueBedrockSettings
 */
export default {
  prefix,
  variants,
}
