/** @ts-ignore-next-line */
import { greet, generate_points } from '../../../public/waveslib/waveslib.js'
import { MouseEventHandler } from 'react'

type Point = {
  x: number;
  y: number;
}

export const Canvas = () => {
  const points: Point[] = generate_points(1000)

  const handleGreet: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const res = greet('aa')
    console.log(res)
  }

  return (
    <>
      <svg width='255' height='255'>
        <line x1='0' y1='0' x2='255' y2='255' stroke='#ff6633' />
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r='1' fill='#ff6633' />
        ))}
      </svg>
      <button onClick={handleGreet}>greet</button>
    </>
  )
}