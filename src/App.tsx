import Form from "./components/Form"
import FlashCard from "./components/FlashCard"
import "./index.css"

export default function App() {

  const cards = [
    {id: 1, q: "what's 2+2?", options: ["2", "4", "6"]},
    {id: 1, q: "what's 2+2?", options: ["2", "4", "6"]},
    {id: 1, q: "what's 2+2?", options: ["2", "4", "6"]},
    {id: 1, q: "what's 2+2?", options: ["2", "4", "6"]},
    {id: 1, q: "what", options: ["2", "4", "6"]}
  ]

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
