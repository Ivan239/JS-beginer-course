import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/*  TODO
           Add routes:
            -for Home page ('/', ./pages/Home.jsx)
            -for Register ('/register', ./pages/Home.jsx)
            -for Login (/login, ./pages/Login.jsx) */}
        <Route>404</Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
