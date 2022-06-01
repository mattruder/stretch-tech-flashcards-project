import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'
import MyDecks from './MyDecks'
import CreateDeck from './CreateDeck'
import Nav from './Nav'

type Props = any
type State = {
  allDecks: {}[]
  // test: string
};

type Card = {word: string, definition: string}

interface CreateDeckProps {
  addDeck:  (deck : { name: string, cards: Card[] })  => void
}

class App extends React.Component <{}, State> {

  
  constructor(props) {
    super(props)
    this.state = {
      allDecks: []
      // test: "this is a string"
    }
    this.addDeck = this.addDeck.bind(this)
  }

  addDeck = (deck : { name: string, cards: Card[] }, event) => {
    // this.state.allDecks.push(deck)
    event.preventDefault()

    this.setState({
      allDecks: [...this.state.allDecks, deck]
    })
    console.log(this.state.allDecks)
  }

  render() {
    // let decks = this.state.allDecks.map(deck => {
    //   return deck?.cards[0].word
    console.log(this.state.allDecks, 'this is all decks')
    return (
      <main>
        <Nav />
        
        <BrowserRouter>

        <Switch>
        <Route
          exact path="/my-decks"
          component={MyDecks}


        />
        <Route
          exact path="/create-new-deck"
          render={() => <CreateDeck addDeck={this.addDeck} />}
        />
        <Route
          exact path="/"
          render={() => {
            return (
              <div className="below-navbar-content">
              <Link to="/my-decks">My Decks</Link>
              <Link to="/create-new-deck">Create New Deck</Link>
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
