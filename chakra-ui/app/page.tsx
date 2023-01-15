'use client'
/** @jsxImportSource @emotion/react */
import {
  ChakraProvider,
  Flex,
  Center,
  Box,
  Link,
} from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Page() {
  return (
    <ChakraProvider resetCSS>
      <Flex margin='20px'>
        <Box width='200px'>
          <Link as={NextLink} href='/home' display='block'>
            Home
          </Link>
          <Link as={NextLink} href='/home' display='block'>
            aaa
          </Link>
        </Box>
        <Box flex={1}>aa</Box>
      </Flex>
    </ChakraProvider>
  )
}
