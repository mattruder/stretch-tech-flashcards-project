import React, { Component } from 'react';
import './CreateDeck.css'

type Props = any
type State = {
  test: string
};

class CreateDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <h1>Create Deck Area</h1>
    )
  }
}

export default CreateDeck
