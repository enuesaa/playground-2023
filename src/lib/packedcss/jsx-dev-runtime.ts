import * as ReactJsxDevRuntime from 'react/jsx-dev-runtime'

export function jsxDEV(type: any, props: any, key: any, isStaticChildren: any, source: any, self: any) {
  if (!props.hasOwnProperty('css')) {
    // @ts-ignore
    return ReactJsxDevRuntime.jsxDEV(type, props, key, isStaticChildren, source, self)
  }

  // @ts-ignore
  return ReactJsxDevRuntime.jsxDEV(type, props, key, isStaticChildren, source, self)
}