import About from './components/About'
import Landing from './components/Landing'
import Projects from './components/Projects'

export default function Main({ projects }: { projects: Project[] }) {
  return (
    <>
      <Landing />
      <About />
      <Projects projects={projects} />
    </>
  )
}
