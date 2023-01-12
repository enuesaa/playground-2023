"use client"
import RootStyleRegistry from './emotion'
import './global.css'
import { ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="ja">
      <body>
        <RootStyleRegistry>
          <ChakraProvider>
            {children}
          </ChakraProvider>
        </RootStyleRegistry>
      </body>
    </html>
  )
}
