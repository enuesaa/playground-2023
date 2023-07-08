import { useRef, MouseEventHandler } from 'react'
import Frame, { useFrame } from 'react-frame-component'

const Inner = () => {
  const { document, window } = useFrame()
  console.log(window)

  return (
    <>ckj</>
  )
}


export default function Page() {
  const frame = useRef<HTMLIFrameElement>(null)

  return (
    <>
      {/* a */}
      <Frame>
        {/* bb */}
        <Inner />
      </Frame>
    </>
  )
}
