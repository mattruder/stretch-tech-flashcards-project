import React from 'react'
import './Card.css'

function Card({ word, definition }) {
  return (
    <div className="card">
    <h3>{word}</h3>
    <p>{definition}</p>
    </div>
  )
}

export default Card
