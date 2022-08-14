import React, {useState, useEffect} from 'react';
import StartPage from "./StartPage.js";
import Question from "./Question.js";
import axios from "axios";
import { nanoid } from 'nanoid';

function App() {
        const [data, setData] = useState({})
        const [quizPage, setQuizPage] = useState(false)
        const [questions, setQuestions] = useState()
        const [trigger, setTrigger] = useState(0)
        const [selectElement, setSelectElement] = useState(0)

        

 
        useEffect(() =>{
        axios.get('https://opentdb.com/api.php?amount=5&category=14&difficulty=easy&type=multiple')
        .then(response => setData(response.data.results))
        },[trigger])

        function shuffle(array) {
            let currentIndex = array.length,  randomIndex;
            // While there remain elements to shuffle.
            while (currentIndex !== 0) {
              // Pick a remaining element.
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
              // And swap it with the current element.
              [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
          
            return array;
          }

/*         function showAnswers(){
            isChecked.isSelected1 && data.incorrect_answers[0] === data.correct_answer? setPoints(points => points + 1) : setPoints(points => points - 1)
            console.log(points)
        } */
        function QandA(){
            setQuestions(data.map((data,index) => {            
                shuffle(data.incorrect_answers)
                return(
                <div>
                    <p>{data.question}</p>
                    <ul>
                        <button /* onClick={()=>handleSelection(data.incorrect_answers.id)} */ >{data.incorrect_answers[0]}</button>
                        <button onClick={handleSelection}  >{data.incorrect_answers[1]}</button>
                        <button onClick={handleSelection} >{data.incorrect_answers[2]}</button>
                        <button onClick={handleSelection} >{data.incorrect_answers[3]}</button>
                    </ul>
{/*                     <input type="radio" checked={isChecked} onChange={handleChange}>{data.incorrect_answers[0]}</input>
                    <input type="radio" checked={isChecked} onChange={handleChange}>{data.incorrect_answers[1]}</input>
                    <input type="radio" checked={isChecked} onChange={handleChange}>{data.incorrect_answers[2]}</input>
                    <input type="radio" checked={isChecked} onChange={handleChange}>{data.incorrect_answers[3]}</input> */}
                </div>
                )}))
                
        }
        const handleSelection = () => {
            setSelectElement("yes")
            console.log(selectElement)
        }
        
        function pushAnswers(){
            for(let i=0; i<data.length; i++){
                data[i].incorrect_answers.push(data[i].correct_answer) 
            } 
            console.log(data[0].incorrect_answers[0])
        }
        function renderQuiz(){
            setQuizPage(prevPage => true)  
            pushAnswers()
            QandA()
        }
        function newGame(){
            setTrigger(prevTrigger => trigger + 1)
            pushAnswers()
            QandA()
        }
        return(
            <div>
                {quizPage?
                <Question 
                    question= {questions}
                    restart= {newGame}
                    repititionCount= {trigger}
                />
                : 
                <StartPage 
                onChange = {renderQuiz}/>
                }
            </div>

        )
}


export default App;