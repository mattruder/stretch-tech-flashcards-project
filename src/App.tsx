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
  // test: string
};

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      // test: "this is a string"
    }
  }

  render() {
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
          component={CreateDeck}
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
