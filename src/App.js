import React, {useState, useEffect} from 'react';
import Quiz from "./Quiz.js";


function App() {
  const [mainPage, setMainPage] = useState(true)
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=31&difficulty=medium&type=multiple")
    .then(response => {
      if(response.ok){
        return response.json()
      } else
        throw response
    })
    .then(res => {
      setData(res)
    })
    .catch(error => {
      console.error("Error catching data", error)
      setError(error)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])
  const result = Object.keys(data.results).map((key) => data.results[key]);

  const resultMap = result.map(result => {
    return (
        <div>
            <h1>
              {result.question}
            </h1>
            <h3>{result.incorrect_answers}</h3>
        </div>
    )
  })
  

function handleClick(){
    setMainPage(prevPage => !prevPage)
}
  if(mainPage === true){  return (
    <div className="wrapper">
    <h1 className="quizzical">Quizzical</h1>
    <h4>Do you know what needs to be known?</h4>
    <button onClick={handleClick}>Start Quiz</button>
    </div>
  );} else { 
    return  (
        <div>
          {resultMap}
          <Quiz 
          onChange ={handleClick}/>
        </div>
    )
}
}
export default App;
