import { category } from "../App"
import "../index.css"

type FormProps = {
  categories: category[]
  categoryRef: React.RefObject<HTMLSelectElement>
  amountRef: React.RefObject<HTMLInputElement>
  generateQuiz: () => void
}

export default function Form({categories, categoryRef, amountRef, generateQuiz}: FormProps) {

  return (
    <div className="form">
      <div className="input-group">
         <label htmlFor="category">Category:</label>
         <select id="category" ref={categoryRef}>
           {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
           ))}
         </select>
      </div>
      <div className="input-group">
         <label htmlFor="question-number">Number of Questions:</label>
         <input type="number"  id="question-number" min={1} step={1} defaultValue={10} ref={amountRef} />
      </div>
      <button className="generate-btn" onClick={generateQuiz}>Generate</button>
    </div>
  )
}
