import { useState } from "react"
import { cards } from "../App";
import "../index.css"


export default function FlashCard({answer, question, options}: cards) {

  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={() => setIsFlipped(prev => !prev)}>
        <div className="front-side">
          <p className="question">{question}</p>
          <ul className="options">
            {options.map(option => (
              <li key={option}>{option}</li>
             ))}
          </ul>
        </div>
        <div className="back-side">
          <p className="answer">{answer}</p>
        </div>
    </div>
  )
}
