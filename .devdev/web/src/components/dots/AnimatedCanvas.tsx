import { useAtomValue } from 'jotai'
import { waveslibAtom } from '@/lib/waveslib'
import { css, keyframes } from '@emotion/react'

export const AnimatedCanvas = () => {
  const waveslib = useAtomValue(waveslibAtom)
  if (waveslib === null) {
    return <></>
  }
  const points = waveslib.generate_points(1000)
  const randomMoves = [
    keyframes({ to: { transform: 'translate(10px, 1px)' } }),
    keyframes({ to: { transform: 'translate(1px, 6px)' } }),
    keyframes({ to: { transform: 'translate(5px, 9px)' } }),
    keyframes({ to: { transform: 'translate(2px, 3px)' } }),
    keyframes({ to: { transform: 'translate(3px, 4px)' } }),
    keyframes({ to: { transform: 'translate(7px, 8px)' } }),
  ]

  const styles = [
    css({ animation: `${randomMoves[0]} 1s ease infinite alternate` }),
    css({ animation: `${randomMoves[1]} 2s ease infinite alternate` }),
    css({ animation: `${randomMoves[2]} 3s ease infinite alternate` }),
    css({ animation: `${randomMoves[3]} 4s ease infinite alternate` }),
    css({ animation: `${randomMoves[4]} 5s ease infinite alternate` }),
    css({ animation: `${randomMoves[5]} 6s ease infinite alternate` }),
    css({ animation: `${randomMoves[6]} 7s ease infinite alternate` }),
  ]

  return (
    <>
      <svg width='255' height='255'>
        <line x1='0' y1='0' x2='255' y2='255' stroke='#ff6633' />
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r='1' fill='#ff6633' css={styles[i % 6]} />
        ))}
      </svg>
    </>
  )
}
