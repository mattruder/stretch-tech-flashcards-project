import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './MyDecks.css'

type Props = {
  test: string;
}
type State = {
  test: string;
};

class MyDecks extends Component<Props, State> {
  constructor(props) {
    super(props);
    console.log('my decks built')
    // this.state = {
    //
    // }
  }

  render() {
    return (
      <div>
      <h1>My Decks Area</h1>
      <Link to="/create-new-deck">Create New Deck</Link>
      </div>
    )
  }
}

export default MyDecks
