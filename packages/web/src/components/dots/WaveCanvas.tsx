import { useState } from 'react'

export const WaveCanvas = () => {
  const [point, setPoint] = useState<number>(90)
  setTimeout(() => setPoint(Math.random() * 500), 2000)

  return (
    <>
      <svg viewBox='0 0 1440 590'>
        <defs>
          <linearGradient id='gradient' x1='0%' y1='50%' x2='100%' y2='50%'>
            <stop offset='5%' stop-color='#f78da7' />
            <stop offset='95%' stop-color='#8ed1fc' />
          </linearGradient>
        </defs>
        <path
          d={`M 0,600 C 0,600 0,200 0,200 C ${point},228 231,257 326,251 C 420,244 492,203 579,193 C 665,182 766,201 871,190 C 975,178 1084,134 1180,131 C 1275,127 1357,163 1440,200 C 1440,200 1440,600 1440,600 Z`}
          stroke='none'
          stroke-width='0'
          fill='url(#gradient)'
          fill-opacity='0.53'
          className='transition-all duration-300 ease-in-out delay-150 path-0' />
        <path
          d='M 0,600 C 0,600 0,400 0,400 C 84,419 169,438 264,440 C 358,441 463,426 557,434 C 650,441 732,472 819,470 C 905,467 995,433 1100,416 C 1204,398 1322,399 1440,400 C 1440,400 1440,600 1440,600 Z'
          stroke='none'
          stroke-width='0'
          fill='url(#gradient)'
          fill-opacity='1' />
      </svg>
    </>
  )
}
