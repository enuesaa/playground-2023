import * as reactJsxRuntime from 'react/jsx-runtime'

/**
 * @see https://github.com/emotion-js/emotion/blob/main/packages/react/src/jsx-runtime.js
 */
export const jsx = (type: any, props: any, key: any) => {
  if (!props.hasOwnProperty('css')) {
    return reactJsxRuntime.jsx(type, props, key)
  }

  return reactJsxRuntime.jsx(type, props, key)
}