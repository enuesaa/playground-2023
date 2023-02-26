/** @ts-ignore-next-line */
import { greet, generate_points } from '../../../public/waveslib/waveslib.js'
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
  const handleGeneratePoints: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const res = generate_points(1000)
    console.log(res)
  }

  /**
   * @todo react strict mode をどう handle するか。
   * 
   * 部分的に無効化したいが、手立てがないように見える。
   * プロジェクト全体で react strict mode を無効化するのは、おかしな話だと思うので、
   * ランダム値を使う Component が何かしら対処すべきだと思う。Seed 値のような仕組みを作るか。。
   */

  return (
    <>
      <svg width='600' height='600'>
        <line x1='0' y1='0' x2='600' y2='600' stroke='#ff6633' />
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r='1' fill='#ff6633' />
        ))}
      </svg>
      <button onClick={handleGreet}>greet</button>
      <button onClick={handleGeneratePoints}>generatePoints</button>
    </>
  )
}