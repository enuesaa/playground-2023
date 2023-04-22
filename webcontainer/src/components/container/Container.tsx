import { useAtomValue } from 'jotai'
import { containerAtom } from '../../lib/state'

export const Container = () => {
  const container = useAtomValue(containerAtom);

  (async () => {
    const installProcess = await container.spawn('npm', ['install']);
    const code = await installProcess.exit
    console.log(code)
  })()

  return (<></>)
}