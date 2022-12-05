import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Project from './components/Project'
import Projects from './components/Projects'
import Title from './components/Title'

const theme = {
  primary: '#816b56',
  secondary: '#dad0c6',
  bg: '#f3eee9',
}

const Container = styled.div`
  background-color: ${(props) => props.theme.bg};
`

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        {/* <Title /> */}
        {/* <Projects></Projects> */}
        <Project
          title={'Personas & Storyboarding'}
          desc={'not entirely sure what i am supposed to put for this section'}
          link={'https://sombersheep77.github.io/uiux-project-1/'}
          img={'cit.jpg'}
        ></Project>
      </Container>
    </ThemeProvider>
  )
}
