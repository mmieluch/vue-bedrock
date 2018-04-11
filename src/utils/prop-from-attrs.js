export default function (vm, propName, attrName = null) {
  attrName = attrName || propName

  return (
    vm[propName] === true ||
    vm.$options.propsData[attrName] === ''
  )
}
