import React, { useState, useEffect } from "react";
import StartPage from "./StartPage.js";
import Question from "./Question.js";
import axios from "axios";
import { nanoid } from "nanoid";

function App() {
  const [data, setData] = useState({});
  const [quizPage, setQuizPage] = useState(false);
  const [questionData, setQuestionData] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([])
  const questionCount = 5;
  const incorrectBackground = { backgroundColor: "salmon" };
  let questionMap;

  useEffect(() => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=5&category=14&difficulty=easy&type=multiple"
      )
      .then((response) => setData(response.data.results));
  }, [quizPage]);
  useEffect(() => {
    RearrangedData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, quizPage]);

  function RearrangedData() {
    const newRearrangedData = [];
    for (let i = 0; i < data.length; i++) {
      // data[i].incorrect_answers.push(data[i].correct_answer);
      newRearrangedData.push({
        question: data[i].question,
        answers: [
          {
            isCorrect: false,
            id: nanoid(),
            value: data[i].incorrect_answers[0],
          },
          {
            isCorrect: false,
            id: nanoid(),
            value: data[i].incorrect_answers[1],
          },
          {
            isCorrect: false,
            id: nanoid(),
            value: data[i].incorrect_answers[2],
          },
          {
            isCorrect: true,
            id: nanoid(),
            value: data[i].correct_answer,
          },
        ],
      });
      setCorrectAnswers(prevAnsw => [...prevAnsw, data[i].correct_answer])
      correctAnswers.splice(-4)
      shuffle(newRearrangedData[i].answers);
      setQuestionData(newRearrangedData)
    }
  }
  
  console.log(correctAnswers) //correct answers ile selected answers karşılaştırılacak
  if (questionData) {
    questionMap = questionData.map((ques, index) => {
      return (
        <Question
          key={index}
          question={ques.question}
          answers={ques.answers}
          submit={isSubmitted}
          correct={correctAnswers}
        />
      );
    });
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  function renderQuiz() {
    setQuizPage((prevQuiz) => !prevQuiz);
    setIsSubmitted(false);
  }

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  /*   function newGame() {
    setTrigger((prevTrigger) => trigger + 1);
    console.log("NewGame Clicked");
  } */
  return (
    <div>
      {quizPage ? (
        <div className="wrap-quiz">
          {questionMap}
          {isSubmitted ? (
            <p>You scored / {questionCount} correct answers</p>
          ) : (
            ""
          )}

          <button
            className="submit-button"
            onClick={isSubmitted ? renderQuiz : handleSubmit}
          >
            {isSubmitted ? "Play Again" : "Submit Answers"}
          </button>
        </div>
      ) : (
        <StartPage showGame={renderQuiz} />
      )}
    </div>
  );
}

export default App;
