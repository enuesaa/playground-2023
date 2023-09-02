export const Canvas = () => {
  /** @see https://developer.mozilla.org/ja/docs/Web/SVG/Tutorial/Paths */

  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0,0,400,400'>
      {/* <path d='M 10 10 H 90 V 90 H 10 L 10 10' /> */}
      <circle cx='10' cy='10' r='2' fill='red' />
      <circle cx='90' cy='90' r='2' fill='red' />
      <rect x="10" y="10" style={{width: '10px', height: '20px'}} stroke="black" fill="transparent" stroke-width="5"/>
      {/* <circle cx='90' cy='10' r='2' fill='red' /> */}
      {/* <circle cx='10' cy='90' r='2' fill='red' /> */}
    </svg>
  )
}
