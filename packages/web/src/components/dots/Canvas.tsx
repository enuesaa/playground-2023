/** @ts-ignore-next-line */
import { greet } from '../../../public/waveslib/waveslib.js'
import { MouseEventHandler } from 'react'

type Point = {
  x: number;
  y: number;
}

export const Canvas = () => {
  const points: Point[] = [];
  for (let i = 0; i < 1000; i++) {
    points.push({ x: Math.random() * 600 , y: Math.random() * 600 })
  }

  const handleGreet: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const res = greet('aa')
    console.log(res)
  }

  return (
    <>
      <svg width='600' height='600'>
        <line x1='0' y1='0' x2='600' y2='600' stroke='#ff6633' />
        {points.map(p => (
          <circle cx={p.x} cy={p.y} r='1' fill='#ff6633' />
        ))}
      </svg>
      <button onClick={handleGreet}>greet</button>
    </>
  )
}