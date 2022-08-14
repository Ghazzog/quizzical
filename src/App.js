import React, {useState, useEffect} from 'react';
import StartPage from "./StartPage.js";
import Question from "./Question.js";
import axios from "axios";
import { nanoid } from 'nanoid';
import Buttons from "./Buttons.js";

function App() {
        const [data, setData] = useState({})
        const [quizPage, setQuizPage] = useState(false)
        const [trigger, setTrigger] = useState(0)
        const [questions, setQuestions] = useState(()=>RearrangedData())
/*         useEffect(()=> {
            RearrangedData()
            }, []) */
        function RearrangedData(){
            const newRearrangedData = []
            for(let i=0; i<data.length; i++){
                data[i].incorrect_answers.push(data[i].correct_answer)
                shuffle(data[i].incorrect_answers)
                newRearrangedData.push({                  
                        question: data[i].question,
                        answers: {
                            answer1: {
                                isHeld: false,
                                id: nanoid(),
                                value: data[i].incorrect_answers[0],
                            },
                            answer2: {
                                isHeld: false,
                                id:nanoid(),
                                value: data[i].incorrect_answers[1],
                            },
                            answer3: {
                                isHeld: false,
                                id:nanoid(),
                                value: data[i].incorrect_answers[2],
                            },
                            answer4: {
                                isHeld: false,
                                id:nanoid(),
                                value: data[i].incorrect_answers[3],
                            }
                        },
                        id: nanoid()  
                })
            }
        
            /* setQuestions(newRearrangedData) */
        }  

        console.log(questions)


        useEffect(() =>{
        axios.get('https://opentdb.com/api.php?amount=5&category=14&difficulty=easy&type=multiple')
        .then(response => setData(response.data.results))
        },[])

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


        
        function renderQuiz(){
            setQuizPage(true) 
        }
        function newGame(){
            setTrigger(prevTrigger => trigger + 1)
            console.log("NewGame Clicked")
        }
        return(
            <div>
                {quizPage?

                <Question 
                //    question= 

                />


                : 
                <StartPage 
                onChange = {renderQuiz}/>
                }
            </div>

        )

}

export default App;