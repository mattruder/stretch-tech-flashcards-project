import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './MyDecks.css'
import Deck from './Deck'

// type Props = {
//   allDecks: ADeck[]
// }
// type State = {
//   test: string;
// };
//
// type ADeck = {
//   name: string;
//   cards: Card[]
// }
//
// interface DisplayDecksMethod {
//   displayDecks: Props
// }
//
// type Card = {word: string, definition: string}

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
        <Deck deck={deck}/>
      )
    })

    return (
      <div>
      <h1>test</h1>
      <div>{displayDecks}</div>
      <Link to="/create-new-deck">Create New Deck</Link>
      </div>
    )
  }


export default MyDecks
