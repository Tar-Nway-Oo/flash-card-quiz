import React from 'react'
import "../index.css";
import FlashCard from './FlashCard'

export default function FlashCardList({flashCards}) {
  return (
    <div className='card-container'>
      {flashCards.map(card => (
        <FlashCard key={card.id} flashCard={card} />
      ))}
    </div>
  )
}
