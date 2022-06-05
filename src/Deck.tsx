import React from 'react'
import './Deck.css'
// import Game from './Game'
import { Link } from 'react-router-dom'

function Deck({ deck }) {
  return (
    <div className='deck'>
    <h2 className='deck-header'>{deck.name}</h2>
    <Link className='link-on-deck' id='viewCardsLink' to={`/${deck.name}/view-cards`}>View Cards</Link>
    <Link className='link-on-deck' id='editDeckLink' to={`/${deck.name}/edit`}>Edit</Link>
    </div>
  )
}

export default Deck
