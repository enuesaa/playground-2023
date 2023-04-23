/** @see panda.config.ts の output */ 
import { stack } from 'styled-system/patterns'

export default function Page() {
  return (
    <>
      <button className={stack({ direction: 'column' })}>Click me</button>
    </>
  )
}
