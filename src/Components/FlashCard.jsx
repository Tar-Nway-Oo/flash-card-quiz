import React, { useState } from 'react'
import "../index.css";


export default function FlashCard({flashCard}) {
   const [isFlipped, setIsFlipped] = useState(false)
  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={() => {setIsFlipped(prev => !prev)}}>
      <div className="card-front">
         <p className="card-question">{flashCard.question}</p>
         <div className="card-options">
            {flashCard.options.map(option => (
               <p className="card-option" key={option}>{option}</p>
            ))}
         </div>
      </div>
      <div className="card-back">
         <p className="card-answer">{flashCard.answer}</p>
      </div>
    </div>
  )
}
