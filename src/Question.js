import React, { useState } from "react";

export default function Question(props) {
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0)
  const [checkID, setCheckID] = useState();
  const answersMap = props.answers.map((answer) => {
    const styles = {
      backgroundColor: checkID === answer.id ? "#D6DBF5" : "",
    };
    const stylesAfterSubmit = {
      backgroundColor:
        /* if submitted */ checkID === answer.id
          ? "#94D7A2"
          : answer.isCorrect
          ? "salmon"
          : "",
    };

    return (
      <button
        style={props.submit ? stylesAfterSubmit : styles}
        onClick={() => handleID(answer.id, answer.value)}
        key={answer.id}
      >
        {answer.value}
      </button>
    );
  });

  function handleID(id, value) {
    setCheckID(id);
   if(value === props.correct[0] || value ===props.correct[1] || value ===props.correct[2] || value ===props.correct[3]){
      console.log("true answer")
      setCorrectAnswerCount(prevCount => prevCount + 1)}
  }
  console.log(correctAnswerCount)
  return (
    <div className="question-wrap">
      <div>
        <h4 key={props.qkey}>{props.question}</h4>
        {answersMap}
      </div>
    </div>
  );
}
