import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import satori from 'satori'


export default function TopPage() {
  (async () => {
    const svg = await satori(
      <div style={{ color: 'black' }}>hello, world</div>,
      {
        width: 600,
        height: 400,
        fonts: [
          {
            name: 'Roboto',
            data: await fetch("/Roboto-Medium.ttf").then(res => res.arrayBuffer()),
            weight: 400,
            style: 'normal',
          },
        ],
      },
    )
    console.log(svg)
  })()

  return (
    <>
      <Header />
      <Main>
        
      </Main>
    </>
  )
}
