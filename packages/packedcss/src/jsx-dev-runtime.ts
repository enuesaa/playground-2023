import * as ReactJsxDevRuntime from 'react/jsx-dev-runtime'

/**
 * @deprecated all codes of this file
 */

const serialize = (className: string, styleObject: Record<string, string>) => {
  const styleString = Object.keys(styleObject).reduce((prev: string, k) => {
    const v = styleObject[k]
    /** @see https://stackoverflow.com/questions/63116039/camelcase-to-kebab-case */
    const kebabk = k.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    return `${prev}${kebabk}:${v};`
  }, '')

  return `.${className}{ ${styleString} }`
}

export function jsxDEV(type: any, props: Record<string, any>, key: any, isStaticChildren: any, source: any, self: any) {
  if (!props.hasOwnProperty('css')) {
    // @ts-ignore
    return ReactJsxDevRuntime.jsxDEV(type, props, key, isStaticChildren, source, self)
  }

  const properProps: Record<string, any> = {}
  Object.keys(props).map((k) => {
    if (k !== 'css') {
      properProps[k] = props[k]
    }
  })

  // @ts-ignore
  const styled = ReactJsxDevRuntime.jsxDEV('style', {
    children: serialize(props.css.className, props.css.style),
  })
  properProps['className'] = props.css.className
  // @ts-ignore
  const wrapped = ReactJsxDevRuntime.jsxDEV(type, properProps, key, isStaticChildren, source, self)

  // @ts-ignore
  return ReactJsxDevRuntime.jsxDEV('div', { children: [styled, wrapped] })
}
