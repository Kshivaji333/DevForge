import React from 'react'
import NavBar from './NavBar'

function Header() {
  return (
    <header className='flex justify-between items-center p-4'>
      <h1>DevForge</h1>
      <NavBar/>
    </header>
  )
}

export default Header
