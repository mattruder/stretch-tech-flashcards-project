import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <Link to='/'>
        <nav className='nav-bar'>
            What the Deck...?
        </nav>
    </Link>
  )
}

export default Nav
