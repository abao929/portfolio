import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import About from './components/About'
import Landing from './components/Landing'
import Projects from './components/Projects'
import Title from './components/Title'

export default function Main({ projects }: { projects: Project[] }) {
  return (
    <>
      <Landing />
      <About />
      <Projects projects={projects} />
    </>
  )
}
