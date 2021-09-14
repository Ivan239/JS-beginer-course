import { hot } from 'react-hot-loader/root'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import { GlobalStyle } from './index.styles'
import Form from './pages/home/Form'
import Game from './pages/game/Game'

function App() {
  const [state, setState] = useState({})

  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Form
              onSubmit={({ name, age }) => {
                setState({ name, age })
              }}
            />
          }
        />
        <Route path="/game" element={<Game name={state.name} age={state.age} />} />
        <Route path="*" element={404} />
      </Routes>
    </Router>
  )
}

export default hot(App)
