import { useState, useEffect, useRef } from "react"
import Form from "./components/Form"
import FlashCard from "./components/FlashCard"
import axios from "axios";
import "./index.css"

export type card = {
 id: number
 question: string
 options: string[]
 answer: string
}

export type category = {
  id: number
  name: string
}

export default function App() {

  const [cards, setCards] = useState<card[]>([]);

  const [categories, setCategories] = useState<category[]>([]);

  const categoryRef = useRef<HTMLSelectElement>(null);

  const amountRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    axios.get("https://opentdb.com/api_category.php")
    .then(res => {
      setCategories(res.data.trivia_categories)
    })
  }, []);

  function generateQuiz() {
    axios.get("https://opentdb.com/api.php", {
      params: {
        amount: amountRef.current?.value,
        category: categoryRef.current?.value
      }
    })
    .then(res =>  {
      setCards(res.data.results.map((result: any, index: number) => {
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
  }

  function decodeString(str: string) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }

  return (
    <div className="app">
      <Form categories={categories} categoryRef={categoryRef} amountRef={amountRef} generateQuiz={generateQuiz} />
      <div className="card-container">
        {cards.map(card => (
          <FlashCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  )
}
