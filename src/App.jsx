import React, {useState, useEffect, useRef} from 'react'
import "./index.css";
import FlashCardList from "./Components/FlashCardList.jsx"
import Form from './Components/Form.jsx';

export default function App() {

  const [flashCards, setFlashCards] = useState([]);
  const [categories, setCategories] = useState([]);
  const selectEl = useRef();
  const inputEl = useRef();

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
    .then(res => res.json())
    .then(data => {
        setCategories(data.trivia_categories);
      });
    }, []);

  function decodeString(str) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }

  function submitForm(event) {
    event.preventDefault();
    const amount = inputEl.current.value;
    const category = selectEl.current.value;
    fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}`)
    .then(res => res.json())
    .then(data => {
      setFlashCards(data.results.map((result, index) => {
        const answer = decodeString(result.correct_answer);
        const options =  [...result.incorrect_answers.map(ans => decodeString(ans)), answer];
        return {
        id: `${index}-${Date.now()}`,
        question: decodeString(result.question),
        answer: answer,
        options: options.sort(() => Math.random() - .5)
        }
      }));
    });
  }

  return (
    <div>
      <Form 
       submitForm={submitForm}
       categories={categories}
       selectEl={selectEl}
       inputEl={inputEl}
       />
      <FlashCardList flashCards={flashCards} />
    </div>
  )
}
 
