import { ReactSketchCanvas } from "react-sketch-canvas";

export const CanvasPage = () => {

  return (
    <>
      <ReactSketchCanvas
        width="600"
        height="400"
        strokeWidth={4}
        strokeColor="black"
      />
    </>
  )
}
