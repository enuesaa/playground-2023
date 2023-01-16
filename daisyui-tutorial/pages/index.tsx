import type { NextPage } from 'next'
import { Sidebar } from '../components/Sidebar'
import { Header } from '../components/Header'

const TopPage: NextPage = () => {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  )
}

export default TopPage