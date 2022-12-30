import * as reactJsxRuntime from 'react/jsx-dev-runtime'

export function jsxDEV(type: any, props: any, key: any, isStaticChildren: any, source: any, self: any) {
  if (!props.hasOwnProperty('css')) {
    return reactJsxRuntime.jsxDEV(type, props, key, isStaticChildren, source, self)
  }

  return reactJsxRuntime.jsxDEV(type, props, key, isStaticChildren, source, self)
}