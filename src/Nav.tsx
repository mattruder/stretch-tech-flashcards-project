import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <Link to='/'>
        <nav className='nav-bar'>
            <h1 className='header'>What the Deck...?</h1>
        </nav>
    </Link>
  )
}

export default Nav
