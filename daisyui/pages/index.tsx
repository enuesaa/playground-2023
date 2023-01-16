import type { NextPage } from 'next'
import { Sidebar } from '../components/Sidebar'

const TopPage: NextPage = () => {
  return (
    <>
      <Sidebar />
      <button className="btn">Hello daisyUI</button>
    </>
  )
}

export default TopPage