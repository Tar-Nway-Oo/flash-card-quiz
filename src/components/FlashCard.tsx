import "../index.css"

type cards = {
   id: number
   q: string
   options: string[]
}
export default function FlashCard({id, q, options}: cards) {
  return (
    <div className="card">
      <p>{q}</p>
      <ul>
         {options.map(o => (
            <li>{o}</li>
         ))}
      </ul>
    </div>
  )
}
