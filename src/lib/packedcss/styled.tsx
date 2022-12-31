const serialize = (className: string, styleObject: Record<string, string>) => {
  const styleString = Object.keys(styleObject).reduce((prev: string, k) => {
    const v = styleObject[k]
    /** @see https://stackoverflow.com/questions/63116039/camelcase-to-kebab-case */
    const kebabk = k.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    return `${prev}${kebabk}:${v};`
  }, '')

  return `.${className}{ ${styleString} }`
}
export const Styled = (trunckedProps: Record<string, any>) => {
  const ElementType = trunckedProps.packed.type
  const elementStyle = trunckedProps.packed.css

  return (
    <>
      <style>{serialize(elementStyle.className, elementStyle.style)}</style>
      <ElementType {...trunckedProps.proper} className={elementStyle.className} />
    </>
  )
}