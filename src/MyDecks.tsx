import React, { Component } from 'react';
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
      <h1>My Decks Area</h1>
    )
  }
}

export default MyDecks
