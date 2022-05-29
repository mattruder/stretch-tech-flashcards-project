import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './CreateDeck.css'
import Card from './Card'
import { textSpanIntersectsWith } from 'typescript';
import { stringify } from 'querystring';


type State = {
  deck: {
    name: string;
    cards: 
    { word: string;
      definition: string;
    }[]
    ;
    // numberOfCards: number
  };
  currentCard: {
    word: string;
    definition: string;
  }
  search: string;
  isWord: boolean;
}

class CreateDeck extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      deck: {
        name: '',
        cards: [],
        // numberOfCards: this.state.deck.cards.length
      },
      currentCard: {
        word: '',
        definition: ''
      },
      search: '',
      isWord: false
    }
  }

  addCardToDeck(card, event) {
    event.preventDefault()
    const words = this.state.deck.cards.map(card => card.word)
    console.log(this.state.deck.cards, 'allcards')
    console.log(card, 'card')
    console.log(this.state.deck.cards.includes(card))


    if (!words.includes(card.word)) {
      this.state.deck.cards.push(card)
      console.log(this.state.deck)
      this.setState({ currentCard: { word: '', definition: '' }, isWord: false })
    } else {
      return
    }
  }

  handleNameChange = (event) => {
    event.preventDefault()
    this.setState({ deck: {name: event.target.value, cards: this.state.deck.cards } })
  }
  // , numberOfCards: this.state.deck.cards.length

  handleChange = (event) => {
   this.setState({ search: event.target.value })
 }

  wordSearch(word: string, event) {
    event.preventDefault()
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => response.json())
    .then(data => this.setState({ currentCard: { word: data[0].word, definition: data[0].meanings[0].definitions[0].definition }, isWord: true, search: '' }))
    .catch(err => console.log("ERROR"))
  }

  render() {
    // const searchedWord: string = this.state.currentCard[0].word
    // const definition: string = this.state.currentCard[0].meanings[0].definitions[0].definition


    return (
      <div>
      <Link to="/my-decks">My Decks</Link>
      <form>
        <input type="text" value={this.state.search} placeholder="Search For A Word" className="word-search-input" onChange={event => this.handleChange(event)} />
        <input type='text' value={this.state.deck.name} placeholder="Name this deck" className="name-this-deck" onChange={event => this.handleNameChange(event)}/>
        <button className="word-search-button" onClick={(event) => this.wordSearch(this.state.search, event)}>Search</button>
        <button className="add-card-button" onClick={ (event) => this.addCardToDeck(this.state.currentCard, event)}>Add Card</button>
      </form>
      {this.state.isWord && <Card word={this.state.currentCard.word} definition={this.state.currentCard.definition} />}
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
