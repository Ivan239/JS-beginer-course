import React from 'react'
import './Header.scss'

function Header() {
  return (
    <header className={'header'}>
      <div className="container header-container">
        <a className="header-main-link" href="/">React app</a>
        <div>Contact me: <a href="mailto:nekitboy@yandex.ru">nekitboy@yandex.ru</a></div>
      </div>
    </header>
  )
}

export default Header
