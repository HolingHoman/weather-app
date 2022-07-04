import React from 'react'
import Home from './components/pages/Home/Home'
import './styles/index.scss'
import ThemeProvider from './context/theme/themeContext'

const App = () => {
  return (
    <ThemeProvider>
      <main className="app container">
        <Home />
      </main>
    </ThemeProvider>
  )
}

export default App
