import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <Link to='/'>
        <nav className='nav-bar'>
            what the deck...?
        </nav>
    </Link>
  )
}

export default Nav