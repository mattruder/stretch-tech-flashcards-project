import React from 'react';
import './MyDecks.css'
import Card from './Card'

function ViewCards({ deck }) {
  const allCards = deck.cards.map((card) => {
    return (
      <Card word={card.word} key={card.word} definition={card.definition} />
    )
  })

  return (
    <div>
    {allCards}
    </div>
  )
}

export default ViewCards
