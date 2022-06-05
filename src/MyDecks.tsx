import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './MyDecks.css'
import Deck from './Deck'

function MyDecks({ allDecks }) {

  const displayDecks = allDecks.map((deck) => {
      return (
        <Deck key={deck.name} deck={deck}/>
      )
    })

    return (
      <div className='my-decks-container'>
      <div className='my-decks'>{displayDecks}</div>
      <Link className='link-create-deck-from-my-decks' to="/create-new-deck">Create New Deck</Link>
      </div>
    )
  }


export default MyDecks
