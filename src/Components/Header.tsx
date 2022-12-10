import React from 'react'
import logo from '../img/logo.svg'

function Header() {
  return (
    <header className="flex justify-between mt-3 mx-3">
      <img src={logo} className="h-10" alt="logo" />
      <a className="pr-5">...</a>
    </header>
  )
}

export default Header
