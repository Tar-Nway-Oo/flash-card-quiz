import Form from "./components/Form"
import FlashCard from "./components/FlashCard"
import "./index.css"
import { useEffect, useState } from "react"

export type cards = {
 id: number
 question: string
 options: string[]
 answer: string
}

export default function App() {

  const [cards, setCards] = useState<cards[]>([]);

  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=10`)
    .then(res => res.json())
    .then(data => {
      setCards(data.results.map((result: any, index: number) => {
        const answer = decodeString(result.correct_answer);
        const options = [...result.incorrect_answers.map((answer: string) => decodeString(answer)), answer];
        return {
        id: `${index}-${Date.now()}`,
        question: decodeString(result.question),
        answer: answer,
        options: options.sort(() => Math.random() - .5)
        }
      }));
    });
  }, [])

  function decodeString(str: string) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }

  return (
    <div>
      <Form />
      <div className="card-container">
        {cards.map(card => (
          <FlashCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  )
}
