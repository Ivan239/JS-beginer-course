import { hot } from 'react-hot-loader/root'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider as StoreProvider } from 'react-redux'
import Header from './components/Header/Header'
import { GlobalStyle } from './index.styles'
import Form from './pages/home/Form'
import Game from './pages/game/Game'
import store from './store'

function App() {
  return (
    <StoreProvider store={store}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/game" element={<Game />} />
          <Route path="*" element={404} />
        </Routes>
      </Router>
    </StoreProvider>
  )
}

export default hot(App)
