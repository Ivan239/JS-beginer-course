import { hot } from 'react-hot-loader/root'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import { GlobalStyle } from './index.styles'
import Form from './components/Form/Form'
import Game from './components/Game/Game'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={404} />
      </Routes>
    </Router>
  )
}

export default hot(App)
