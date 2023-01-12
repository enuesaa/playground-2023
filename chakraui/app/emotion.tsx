'use client'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { useServerInsertedHTML } from 'next/navigation'
import { useState } from 'react'

/**
 * @see https://github.com/emotion-js/emotion/issues/2928
 */
export default function RootStyleRegistry({ children }: { children: JSX.Element }) {
  const [cache] = useState(() => createCache({ key: 'chgvjbnk' }))
  console.log(cache)

  useServerInsertedHTML(() => {
    const ids = Object.keys(cache.inserted).join(' ')
    console.log(Object.values(cache.inserted).join(' '))
    return (
      <style
        data-emotion={`${cache.key} ${ids}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(cache.inserted).join(' '),
        }}
      />
    )
  })

  return (
    <CacheProvider value={cache}>
      {children}
    </CacheProvider>
  )
}

