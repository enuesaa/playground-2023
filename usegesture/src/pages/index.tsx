import dynamic from 'next/dynamic'
import Animated from '../components/Animated'

// const Animated = dynamic(() => import('../components/Animated'), {ssr: false})

export default function Page() {
  return (<Animated />)
}
