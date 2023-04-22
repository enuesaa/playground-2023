import { WebContainer } from "@webcontainer/api"

export const Container = () => {

  if (typeof window !== 'object') {
    return (<></>)
  }

  (async () => {
    const container = await WebContainer.boot()
    const installProcess = await container.spawn('npm', ['install']);
    const code = await installProcess.exit
    console.log(code)
  })()

  return (<></>)
}