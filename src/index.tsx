import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './Main'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProjectPage } from './components/Project'
import { PROJECT_DATA } from './data'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    background-color: #f3eee9;
  }
`

const theme = {
  primary: '#816b56',
  primaryTint: '#8D7966',
  // secondary: '#B4A69B',
  dark: '#634832',
  secondary: '#dad0c6',
  bg: '#f3eee9',
  sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

// const PROJECT_DATA: Project[] = await fetch('projects.json', {
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   },
// })
//   .then((r) => r.json())
//   .then((json: Project[]) => json)

// console.log(PROJECT_DATA)

// PROJECT_DATA.forEach((x) => console.log('testing', x))

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='portfolio' element={<Main projects={PROJECT_DATA} />} />
          <Route
            path='lucidity'
            element={<ProjectPage {...PROJECT_DATA[0]} idx={0} />}
          />
          <Route
            path='personas'
            element={<ProjectPage {...PROJECT_DATA[1]} idx={1} />}
          />
          <Route
            path='redesign'
            element={<ProjectPage {...PROJECT_DATA[2]} idx={2} />}
          />
          <Route
            path='ivrogne'
            element={<ProjectPage {...PROJECT_DATA[3]} idx={3} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
