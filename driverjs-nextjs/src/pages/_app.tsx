import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { driver } from 'driver.js'
import 'node_modules/driver.js/dist/driver.css'
// import 'driver.js/dist/driver.min.css'

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined') {
    const driverObj = driver({
      showProgress: true,
      steps: [
        { element: '#heyheyhey', popover: { title: 'Title', description: 'Description' } },
      ]
    });
    driverObj.drive()
  }

  return <Component {...pageProps} />
}
