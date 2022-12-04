import React from 'react'
import { ThemeProvider } from 'styled-components'
import Project from './components/Project'
import Title from './components/Title'

type Props = {}

const theme = {
  primary: '#816b56',
  secondary: '#dad0c6',
  bg: '#f3eee9',
}

export default function Main({}: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Title />
    </ThemeProvider>
  )
}
