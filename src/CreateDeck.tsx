import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './CreateDeck.css'
import Card from './Card'

type Props = any
// type State = {
//   test: string,
//   deck: object,
//   currentCard: object,
//   search: string
// };

class CreateDeck extends React.Component<{}, { search: string, deck: (object)[], currentWord: string, currentDefinition: string, isWord: boolean } > {
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      currentWord: '',
      currentDefinition: '',
      search: '',
      isWord: false
    }
  }

  handleChange = (event) => {

   this.setState({ search: event.target.value })
 }

  wordSearch(word: string, event) {
    event.preventDefault()
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => response.json())
    .then(data => this.setState({ currentWord: data[0].word, currentDefinition: data[0].meanings[0].definitions[0].definition, isWord: true, search: '' }))
    .catch(err => console.log("ERROR"))
  }

  addCardToDeck(word, definition) {
    const wordObject = {
      word: word,
      definition: definition
    }

    this.state.deck.push(wordObject)
    console.log(this.state.deck)
    this.setState({ currentWord: '', currentDefinition: '', isWord: false })
  }

  render() {
    // const searchedWord: string = this.state.currentCard[0].word
    // const definition: string = this.state.currentCard[0].meanings[0].definitions[0].definition


    return (
      <div>
      <Link to="/my-decks">My Decks</Link>
      <form>
        <input type="text" value={this.state.search} placeholder="Search For A Word" className="word-search-input" onChange={event => this.handleChange(event)} />
        <button className="word-search-button" onClick={(event) => this.wordSearch(this.state.search, event)}>Search</button>
      </form>
      {this.state.isWord && <Card word={this.state.currentWord} definition={this.state.currentDefinition} />}
      <button className="addCard" onClick={() => this.addCardToDeck(this.state.currentWord, this.state.currentDefinition)}>Add Card To Deck</button>
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
