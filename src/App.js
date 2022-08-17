import React, { useState, useEffect } from "react";
import StartPage from "./StartPage.js";
import Question from "./Question.js";
import axios from "axios";
import { nanoid } from "nanoid";

function App() {
  const [data, setData] = useState({});
  const [quizPage, setQuizPage] = useState(false);
  const [trigger, setTrigger] = useState(0);
  const [questionData, setQuestionData] = useState();
  const [selectElement, setSelectElement] = useState(0);
  let questionMap;

  useEffect(() => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=5&category=14&difficulty=easy&type=multiple"
      )
      .then((response) => setData(response.data.results));
  }, []);
  useEffect(() => {
    RearrangedData();
  }, [data]);

  function RearrangedData() {
    const newRearrangedData = [];
    for (let i = 0; i < data.length; i++) {
      data[i].incorrect_answers.push(data[i].correct_answer);
      shuffle(data[i].incorrect_answers);
      newRearrangedData.push({
        question: data[i].question,
        answers: [
          {
            isSelected: false,
            id: nanoid(),
            value: data[i].incorrect_answers[0],
          },
          {
            isSelected: false,
            id: nanoid(),
            value: data[i].incorrect_answers[1],
          },
          {
            isSelected: false,
            id: nanoid(),
            value: data[i].incorrect_answers[2],
          },
          {
            isSelected: false,
            id: nanoid(),
            value: data[i].incorrect_answers[3],
          },
        ],
      });
    }
    setQuestionData(newRearrangedData);
  }

  if (questionData) {
    questionMap = questionData.map((ques, index) => {
      return (
        <Question key={index} question={ques.question} answers={ques.answers} />
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
    setQuizPage(true);
  }
  function newGame() {
    setTrigger((prevTrigger) => trigger + 1);
    console.log("NewGame Clicked");
  }
  return (
    <div>
      {quizPage ? (
        <div>{questionMap}</div>
      ) : (
        <StartPage onChange={renderQuiz} />
      )}
    </div>
  );
}

export default App;
