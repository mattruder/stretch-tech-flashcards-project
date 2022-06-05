import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './MyDecks.css'
import Deck from './Deck'

function MyDecks({ allDecks }) {
  // static props: any;
  // constructor(props) {
  //   super(props);
  //   console.log('my decks built')
  //   // this.state = {
  //   //
  //   // }
  // }

  const displayDecks = allDecks.map((deck) => {
      return (
        <Deck key={deck.name} deck={deck}/>
      )
    })

    return (
      <div>
      <div>{displayDecks}</div>
      <Link to="/create-new-deck">Create New Deck</Link>
      </div>
    )
  }


export default MyDecks
