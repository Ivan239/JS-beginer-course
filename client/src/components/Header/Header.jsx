import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import authService from '../../services/auth.service'

function Header() {
  const history = useHistory()
  const handleLogout = () => {
    authService.logout()
    history.replace('/')
  }

  return (
    <header>
      <b>Hometask #2</b>
      {!authService.isAuthorized() ? (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      ) : (
        <NavLink to="" onClick={handleLogout}>
          Logout
        </NavLink>
      )}
    </header>
  )
}

export default Header
