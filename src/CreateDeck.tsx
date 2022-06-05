import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './CreateDeck.css'
import Card from './Card'
import { textSpanIntersectsWith } from 'typescript';
import { stringify } from 'querystring';
import AddDeckButton from './AddDeckButton';

interface MyProps {
  deleteWord: (word: string, deck: Deck) => void
  myDeck?: Deck 
  addDeck:  (deck : { name: string, cards: {word: string, definition: string }[] }, event)  => void

}

// interface Props {
//   deck: Deck
// }

// interface CreateDeckProps {
//   addDeck:  (deck : { name: string, cards: {word: string, definition: string }[] }, event)  => void
// }

type Card = {
  key: string;
  word: string;
  definition: string;
}
type Deck = {
  key: number;
  name: string;
  cards: Card[]
}

type State = {
  deck: Deck;
  currentCard: {
    key: string;
    word: string;
    definition: string;
  }
  search: string;
  isWord: boolean;
}


class CreateDeck extends React.Component<MyProps, State> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      deck: {
        key: Date.now(),
        name: '',
        cards: []
        // numberOfCards: this.state.deck.cards.length
      },
      currentCard: {
        key: '',
        word: '',
        definition: ''
      },
      search: '',
      isWord: false
    }
  }

  componentDidMount = () => {
    if (this.props.myDeck) {
      this.setState ({
        deck: this.props.myDeck
      })
      console.log('inside componentDidMount', this.state.deck)
    }
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.myDeck !== prevProps.myDeck) {
      this.setState ({
        deck: this.props.myDeck
      })
      console.log('inside componentDidMount', this.state.deck)
    }
  }
  
  // needs to check if the deck name from the previous query matches the current deck name
  // and if it doesn't then it needs to reset the state

  addCardToDeck(card, event) {
    event.preventDefault()
    const words = this.state.deck.cards.map(card => card.word)
    console.log(this.state.deck.cards, 'allcards')
    console.log(card, 'card')
    console.log(Date.now(), 'date')
    console.log(this.state.deck.cards.includes(card))



    if (!words.includes(card.word)) {
  
      console.log(this.state.deck)
      this.setState({
      deck: { 
        key: this.state.deck.key, 
        name: this.state.deck.name, 
        cards: [...this.state.deck.cards, card]
      },
      currentCard: { 
        key: '', 
        word: '', 
        definition: '' },
        search: '', 
        isWord: false 
      })
    } else if (!words.includes(card.word) && this.props.myDeck === undefined) {
      console.log(this.state.deck)
      this.setState({
        deck: { 
          key: this.state.deck.key, 
          name: this.state.deck.name, 
          cards: [...this.state.deck.cards, card]
        },
        currentCard: { 
          key: '', 
          word: '', 
          definition: '' },
          search: '', 
          isWord: false 
        })
    }
  }
// If the deck name changes the previous cards should not follow to the new deck
// 

  handleNameChange = (event) => {
    event.preventDefault()
    this.setState({ deck: {key: this.state.deck.key, name: event.target.value, cards: this.state.deck.cards } })
  }
  // , numberOfCards: this.state.deck.cards.length

  handleChange = (event) => {
   this.setState({ search: event.target.value })
 }

  wordSearch(word: string, event) {
    event.preventDefault()
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => response.json())
    .then(data => this.setState({ currentCard: { key: '', word: data[0].word, definition: data[0].meanings[0].definitions[0].definition }, isWord: true, search: '' }))
    .catch(err => console.log("ERROR"))
  }



  render() {
    const cardsToDisplay = this.state.deck.cards.map(card => {
      return (
        <div>
          <p>{card.word}</p>
          <button onClick={() => this.props.deleteWord(card.word, this.state.deck)}>X</button>
        </div>

      )
    })
    // const searchedWord: string = this.state.currentCard[0].word
    // const definition: string = this.state.currentCard[0].meanings[0].definitions[0].definition
    if (this.props.myDeck === undefined) {
      return (
        <div>
        <Link to="/my-decks">My Decks</Link>
        <form>
          <input type="text" value={this.state.search} placeholder="Search For A Word" className="word-search-input" onChange={event => this.handleChange(event)} />
          <input type='text' value={this.state.deck.name} placeholder="Name this deck" className="name-this-deck" onChange={event => this.handleNameChange(event)}/>
          <button className="word-search-button"  onClick={(event) => this.wordSearch(this.state.search, event)}>Search</button>
          <AddDeckButton addDeck={this.props.addDeck} deck={this.state.deck} />
        </form>
        {this.state.isWord && 
        <div> 
          <Card key={this.state.currentCard.word} word={this.state.currentCard.word} definition={this.state.currentCard.definition} />
          <button className="add-card-button"  onClick={ (event) => this.addCardToDeck(this.state.currentCard, event)}>Add Card</button>
        </div>
        }
        {cardsToDisplay}
        </div>
      ) 
    } else if (this.props.myDeck) {
      return (
        <div>
        <Link to="/my-decks">My Decks</Link>
        <form>
          <input type="text" value={this.state.search} placeholder="Search For A Word" className="word-search-input" onChange={event => this.handleChange(event)} />
          <h1>{this.state.deck.name}</h1>
          <button className="word-search-button"  onClick={(event) => this.wordSearch(this.state.search, event)}>Search</button>
          <AddDeckButton addDeck={this.props.addDeck} deck={this.state.deck} />
        </form>
        {this.state.isWord && 
        <div> 
          <Card key={this.state.currentCard.word} word={this.state.currentCard.word} definition={this.state.currentCard.definition} />
          <button className="add-card-button"  onClick={ (event) => this.addCardToDeck(this.state.currentCard, event)}>Add Card</button>
        </div>
        }
        {cardsToDisplay}
        </div>
      )
    }
    console.log('inside render', this.state.deck)

   
  }
}

export default CreateDeck


/*
in state, we can hold: the deck we're building, the current card to be put in the deck

we'll need:

a form, with a string input and a button that searches for the word, and fetches that word OR returns an error



*/
