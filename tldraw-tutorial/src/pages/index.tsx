import '@tldraw/tldraw/tldraw.css'
import dynamic from 'next/dynamic'

// see https://github.com/tldraw/tldraw/issues/1449
const TLDraw = dynamic(() => import('@tldraw/tldraw').then(p => p.Tldraw), {ssr: false})

export default function Page() {
  return (
    <>
      <div style={{ position: 'fixed', inset: 0 }} >
        <TLDraw />
      </div>
    </>
  )
}
