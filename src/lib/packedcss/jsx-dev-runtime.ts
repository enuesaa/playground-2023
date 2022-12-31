import * as ReactJsxDevRuntime from 'react/jsx-dev-runtime'
import { Styled } from './styled'

export function jsxDEV(type: any, props: Record<string, any>, key: any, isStaticChildren: any, source: any, self: any) {
  if (!props.hasOwnProperty('css')) {
    // @ts-ignore
    return ReactJsxDevRuntime.jsxDEV(type, props, key, isStaticChildren, source, self)
  }

  const trunckedProps = {
    proper: {} as Record<string, any>,
    packed: { type, css: props.css }
  }
  Object.keys(props).map(k => {
    if (k !== 'css') {
      trunckedProps.proper[k] = props[k]
    }
  })
  console.log(trunckedProps)

  // @ts-ignore
  return ReactJsxDevRuntime.jsxDEV(Styled, trunckedProps, key, isStaticChildren, source, self)
}