import React from 'react'
import { useHistory } from 'react-router-dom'
import './AddDeckButton.css'

function AddDeckButton({ addDeck, deck }) {

    let history = useHistory()
    const goHome = () => {
      history.push("/my-decks");
    }
  return (
    <div>
        <button onClick={(event) => {
            goHome() 
            addDeck(deck, event)
        }}>Add Deck</button>
    </div>
  )
}

export default AddDeckButton
