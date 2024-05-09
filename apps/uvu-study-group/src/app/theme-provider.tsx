// apps/uvu-study-group/src/app/theme-provider.tsx
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React, { FC, ReactNode } from 'react'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: 'Arial, sans-serif'
      }
    }
  }
})

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default ThemeProvider