import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'
import MyDecks from './MyDecks'
import CreateDeck from './CreateDeck'
import ViewCards from './ViewCards'
import Nav from './Nav'

type Props = any
type State = {
  allDecks: Deck[]
  // test: string
};

type Deck = {
  key: number;
  name: string;
  cards: Card[]
}

type Card = { key: string, word: string, definition: string}

interface CreateDeckProps {
  addDeck:  (deck : { name: string, cards: Card[] })  => void
}

class App extends React.Component <{}, State> {


  constructor(props: Props) {
    super(props)
    this.state = {
      allDecks: []
    }
    this.addDeck = this.addDeck.bind(this)
    this.deleteWord = this.deleteWord.bind(this)
  }

// Put into the else if: if the deck name matches a deck in app state decks we could use the indexOf
// to find the index position of the deck or we could use the second argument (index) in the forEach iterator
// decks.forEach((deck, index))
// if

  addDeck = (deck : { key: number, name: string, cards: Card[] }, event) => {
    // this.state.allDecks.push(deck)
    event.preventDefault()
    const newDecks = this.state.allDecks.filter(item => {
      return item.name !== deck.name
    })
      this.setState({
        allDecks: [...newDecks, deck]
      })
  }

  deleteWord = (word: string, deck: Deck) => {
    const filteredCards = deck.cards.filter(card => {
       return card.word !== word

       })
       let testState = this.state.allDecks
       console.log(testState, 'this is testState')
       const newDeck: Deck = {
         key: deck.key,
         name: deck.name,
         cards: filteredCards
       }

       this.state.allDecks.forEach((item, i) => {
         if (item.name === deck.name) {
           testState.splice(i, 1, newDeck)
         this.setState(
                {
                  allDecks: testState
                }
         )

         }
       })
      //  this.setState(
      //    {
      //      deck: {
      //        name: this.state.deck.name,
      //        cards: filteredCards}
      //    }
      //  )
   }

  render() {
    // let testState = this.state
    // console.log(testState, 'this is testState')
    // let decks = this.state.allDecks.map(deck => {
    //   return deck?.cards[0].word
    // console.log(this.state.allDecks, 'this is all decks')
    return (
      <main>
        <BrowserRouter>
        <Nav />
        <Switch>
        <Route
          exact path="/my-decks"
          render={() => <MyDecks allDecks={this.state.allDecks} />}
        />
        <Route
          exact path="/create-new-deck"
          render={() => <CreateDeck key={Date.now()} addDeck={this.addDeck} myDeck={undefined} deleteWord={this.deleteWord} />}
        />
        <Route
            exact path="/:deckname/view-cards"
            render={({match}) => {
              const deckname = match.params.deckname
              const deck = this.state.allDecks.find((deck) => {
                return deck.name === deckname
              })
              return <ViewCards deck={deck} />
            }}
            />
        <Route
            exact path="/:deckname/edit"
            render={({match}) => {
              const deckname = match.params.deckname
              const deck = this.state.allDecks.find((deck) => {
                return deck.name === deckname
              })
              console.log(deck)
              return <CreateDeck key={Date.now()} myDeck={deck} addDeck={this.addDeck} deleteWord={this.deleteWord}/>
            }}
          />
        <Route
          exact path="/"
          render={() => {
            return (
              <div className="below-navbar-content">
              <Link to="/my-decks" className="link-on-homepage" id='myDecksLink'>My Decks</Link>
              <Link to="/create-new-deck" className="link-on-homepage" id='createDeckLink'>Create New Deck</Link>
              </div>
            )
              }
            }
        />
        </Switch>
        </BrowserRouter>



      </main>
    );
  }

}

export default App;


// in my decks, we'll pass down All Decks from app, and iterate through them, and render a Deck for each deck.
