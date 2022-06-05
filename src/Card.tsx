import React from 'react'
import './Card.css'

function Card({ word, definition }) {
  return (
    <div className="card">
    <h1>{word}</h1>
    <p>{definition}</p>
    </div>
  )
}

export default Card
