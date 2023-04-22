import { WebContainer } from "@webcontainer/api"

const run = async (container: WebContainer, name: string, args: string[]): Promise<string> => {
  const ps = await container.spawn(name, args);
  const out = await ps.output.getReader().read()
  return out.value ?? ''
}

export const Container = () => {

  if (typeof window !== 'object') {
    return (<></>)
  }

  (async () => {
    const container = await WebContainer.boot()
    console.log(await run(container, 'node', ['--version']))
    console.log(await run(container, 'which', ['node']))
    console.log(await run(container, 'yarn', ['--version']))
    console.log(await run(container, 'echo', ['a']))
    console.log(await run(container, 'ls', ['--l']))
    console.log(await run(container, 'pwd', []))
    console.log(await run(container, 'ls', ['/usr/local/bin']))
    console.log(await run(container, 'printenv', []))
    console.log(await run(container, 'yarn', ['install']))
    console.log(await run(container, 'yarn', ['add', '--dev', 'prettier']))

    await new Promise(resolve => setTimeout(resolve, 3000))

    const files = await container.fs.readdir('./')
    console.log(files)
    const files2 = await container.fs.readdir('./node_modules')
    console.log(files2)
  })()

  return (<></>)
}