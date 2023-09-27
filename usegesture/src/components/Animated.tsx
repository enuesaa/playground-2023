import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

export default function Animated () {
  const [{ x, y }, api] = useSpring(() => ({ x: 10, y: 10 }))

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 10, y: down ? my : 0, immediate: down })
  })

  return (
    <>
    a
      <animated.div {...bind()}
        style={{
          x,
          y,
          width: 80,
          height: 80,
          background: '#ff6633',
        }} />
    </>
  )
}
