import React from 'react'
import './Card.css'

function Card({ word, definition }) {
  return (
    <div>
    <h1>{word}</h1>
    <p>{definition}</p>
    </div>
  )
}

export default Card
