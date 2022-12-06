import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import About from './components/About'
import Landing from './components/Landing'
import Project from './components/Project'
import Projects from './components/Projects'
import Title from './components/Title'

const theme = {
  primary: '#816b56',
  primaryTint: '#8D7966',
  // secondary: '#B4A69B',
  dark: '#634832',
  secondary: '#dad0c6',
  bg: '#f3eee9',
  sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
}

const Container = styled.div`
  background-color: ${(props) => props.theme.bg};
`

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Title /> */}
      <Landing />
      <About />
      <Projects />
    </ThemeProvider>
  )
}
