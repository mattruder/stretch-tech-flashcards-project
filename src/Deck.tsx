import React from 'react'
import './Deck.css'
// import Game from './Game'
import { Link } from 'react-router-dom'

function Deck({ deck }) {
  return (
    <div>
    <h1>{deck.name}</h1>
    <Link to={`/${deck.name}/view-cards`}>View Cards</Link>
    <Link to={`/${deck.name}/edit`}>Edit</Link>
    </div>
  )
}

export default Deck
