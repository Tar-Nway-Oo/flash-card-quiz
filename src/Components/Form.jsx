import React from 'react'
import "../index.css"

export default function Form({submitForm, categories, selectEl, inputEl}) {
  return (
   <form className='form' onSubmit={submitForm}>
        <label htmlFor="category" className="form-label">Category: </label>
        <select id="category" className="form-select" ref={selectEl}>
          {categories.map(cat => (
            <option value={cat.id} key={cat.id}>{cat.name}</option>
          ))}
        </select>
        <label htmlFor="amount" className="form-label">Number Of Questions: </label>
        <input id='amount' type="number" className="form-input" min={1} defaultValue={1} ref={inputEl} />
        <button className='btn'>Generate</button>
      </form>
  )
}
