import { createContext, useState, ReactNode } from 'react'

type StyleObject = {
  [key: string]: string,
}
type StyleObjects = {
  [className: string]: StyleObject,
}
type StyleNodeState = {
  [id: string]: StyleObjects,
}

type PackedStyleHandler = (id: string, styleObjects: StyleObjects) => void
export const PackedStyleHandlerContext = createContext<PackedStyleHandler>(() => {});

const serialize = (className: string, styleObject: StyleObject) => {
  const styleString = Object.keys(styleObject).reduce((prev: string, k) => {
    const v = styleObject[k]
    /** @see https://stackoverflow.com/questions/63116039/camelcase-to-kebab-case */
    const kebabk = k.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    return `${prev}${kebabk}:${v};`
  }, '')

  return `.${className}{ ${styleString} }`
}

type PackedContextProps = {
  children: ReactNode,
  packedbase: any
}
export const PackedContext = ({ children }: PackedContextProps) => {
  const [styleNodeState, setStyleNodeState] = useState<StyleNodeState>({})
  const packedStyleHandler: PackedStyleHandler = (id, styleObjects) => {
    setStyleNodeState({ ...styleNodeState, [id]: styleObjects })
  }

  return (
    <>
      {Object.keys(styleNodeState).map(k => {
        return (
          <style key={k}>
            {Object.entries(styleNodeState[k]).map(([k, v]) => serialize(k, v)).reduce((prev, v) => `${prev}${v}`)}
          </style>
        )
      })}
      <PackedStyleHandlerContext.Provider value={packedStyleHandler}>
        {children}
      </PackedStyleHandlerContext.Provider>
    </>
  )
}