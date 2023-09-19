import { Excalidraw, MainMenu } from "@excalidraw/excalidraw"
import { CanvasPage } from './canvas'

export default function App() {
  return (
    <>
      <div style={{ height: "100vh" }}>
        {/* <Excalidraw>
          <MainMenu />
        </Excalidraw> */}
        <CanvasPage />
      </div>
    </>
  )
}
