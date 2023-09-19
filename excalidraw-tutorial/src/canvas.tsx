import { ReactSketchCanvas } from "react-sketch-canvas";

export const CanvasPage = () => {

  return (
    <div style={{ width: '70vw', height: '100vh', overflowX: 'auto' }}>
      <ReactSketchCanvas
        width="1500px"
        height="700px"
        strokeWidth={4}
        strokeColor="black"
      />
    </div>
  )
}
