import React from 'react'
import ThemeProvider from './theme-provider'
import NxWelcome from './nx-welcome'

const App = () => {
  return (
    <ThemeProvider>
      <NxWelcome />
    </ThemeProvider>
  )
}

export default App
