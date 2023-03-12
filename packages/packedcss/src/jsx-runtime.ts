import * as ReactJsxRuntime from 'react/jsx-runtime'

/**
 * @deprecated all codes of this file
 * @see https://github.com/emotion-js/emotion/blob/main/packages/react/src/jsx-runtime.js
 */
export const jsx = (type: any, props: any, key: any) => {
  if (!props.hasOwnProperty('css')) {
    // @ts-ignore
    return ReactJsxRuntime.jsx(type, props, key)
  }

  // @ts-ignore
  return ReactJsxRuntime.jsx(type, props, key)
}
