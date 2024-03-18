import "../index.css"

export default function Form() {

  return (
    <div className="form">
      <div className="input-group">
         <label htmlFor="">Category:</label>
         <select name="" id=""></select>
      </div>
      <div className="input-group">
         <label htmlFor="">Number of Questions:</label>
         <input type="number" name="" id="" />
      </div>
      <button className="generate-btn">Generate</button>
    </div>
  )
}
