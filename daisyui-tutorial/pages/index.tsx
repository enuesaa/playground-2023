import type { NextPage } from 'next'
import { Sidebar } from '../components/Sidebar'
import { Header } from '../components/Header'
import { Card } from '../components/Card'

const TopPage: NextPage = () => {
  return (
    <>
      <Header />
      <section style={{ display: 'flex' }}>
        <Sidebar />
        <div>
          <Card />
        </div>
      </section>
    </>
  )
}

export default TopPage