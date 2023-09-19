// import { Excalidraw, MainMenu } from "@excalidraw/excalidraw"
import { CanvasPage } from './canvas'
import { Global } from '@emotion/react'
import { globalStyle } from './styles/global'

export default function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <section style={{ display: 'flex', height: '100vh' }}>
        <div style={{flex: '0 0 300px', height: '100%'}}>
          <div style={{ width: '100%' }}>aa</div>
        </div>
        <div style={{flex: '1 1 auto'}}>
          {/* <Excalidraw>
            <MainMenu />
          </Excalidraw> */}
          <CanvasPage />
        </div>
      </section>
    </>
  )
}
