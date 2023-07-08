export default function Page() {
  if (typeof window !== 'undefined') {
    window.addEventListener("message", (event) => {
      console.log(event)
    }, false);
  }

  return (
    <>
      a
    </>
  )
}
