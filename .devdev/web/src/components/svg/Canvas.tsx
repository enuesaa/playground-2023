export const Canvas = () => {
  /** @see https://developer.mozilla.org/ja/docs/Web/SVG/Tutorial/Paths */

  const block = {
    "top": 0,
    "bottom": 1,
    "left": 0,
    "right": 1,
    "name": "aa",
    "link": ""
  }

  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0,0,400,400'>
      <g>
        <rect 
          x={block.top + 10}
          y={block.left + 10}
          width={(block.right - block.left) * 10}
          height={(block.bottom - block.top) * 10}
          fill={'#ff6633'}>
        <text
          // x={block.top + 10}
          // y={block.left + 10}
          // width={(block.right - block.left) * 10}
          // height={(block.bottom - block.top) * 10}
        >aa</text> 

          </rect>
      </g>
      {/* <rect x="10" y="10" style={{width: '10px', height: '20px'}} stroke="black" fill="transparent" stroke-width="5"/> */}
    </svg>
  )
}
