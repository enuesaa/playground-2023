export const Canvas = () => {
  /** @see https://developer.mozilla.org/ja/docs/Web/SVG/Tutorial/Paths */

  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'>
      <path d='M 10 10 H 90 V 90 H 10 L 10 10' />
      <circle cx='10' cy='10' r='2' fill='red' />
      <circle cx='90' cy='90' r='2' fill='red' />
      <circle cx='90' cy='10' r='2' fill='red' />
      <circle cx='10' cy='90' r='2' fill='red' />
    </svg>
  )
}
