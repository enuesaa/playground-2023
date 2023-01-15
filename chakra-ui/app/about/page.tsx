/** @jsxImportSource @emotion/react */
'use client'
import { css } from '@emotion/react'

export default function Page() {
  const style = {
    h1: css({
      color: '#ff6633',
    }),
  }

  return (
    <>
      <h1 css={style.h1}>about</h1>
    </>
  )
}
