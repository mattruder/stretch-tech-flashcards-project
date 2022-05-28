import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './CreateDeck.css'

type Props = any
// type State = {
//   test: string,
//   deck: object,
//   currentCard: object,
//   search: string
// };

class CreateDeck extends React.Component<{}, { search: string, deck: object, currentCard: object } > {
  constructor(props) {
    super(props);
    this.state = {
      deck: {},
      currentCard: {},
      search: ''
    }
  }

  handleChange = (event) => {

   this.setState({ search: event.target.value })
 }

  wordSearch(word: string, event) {
    event.preventDefault()
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log("ERROR"))
  }

  render() {
    return (
      <div>
      <Link to="/my-decks">My Decks</Link>
      <form>
        <input type="text" placeholder="Search For A Word" className="word-search-input" onChange={event => this.handleChange(event)} />
        <button className="word-search-button" onClick={(event) => this.wordSearch(this.state.search, event)}>Search</button>
      </form>
      </div>
    )
  }
}

export default CreateDeck


/*
in state, we can hold: the deck we're building, the current card to be put in the deck

we'll need:

a form, with a string input and a button that searches for the word, and fetches that word OR returns an error



*/
