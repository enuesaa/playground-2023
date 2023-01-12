'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export default function Page() {
  const style = {
    h1: css({
      color: '#ff6633',
    }),
  }

  // @ts-ignore
  return <h1 css={style.h1}>nextjs13</h1>
}
