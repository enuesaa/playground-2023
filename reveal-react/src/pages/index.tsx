import dynamic from 'next/dynamic'

export default function Page() {
  // @ts-ignore
  const Content = dynamic(() => import('../components/Content.tsx'), { ssr: false, })

  return (
    <div style={{ width: '100%', height: '600px' }}>
      <Content />      
    </div>
  )
}
