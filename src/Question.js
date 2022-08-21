import React, { useState } from "react";

export default function Question(props) {
    const [checkID, setCheckID] = useState()
    const [SelectedIsCorrect, setSelectedIsCorrect] = useState()

  /* const styles = {
    backgroundColor: checkID ===  ? "salmon" : "",
  }; */

  const answersMap = props.answers.map((answer) => {
    const styles = {
        backgroundColor: checkID === answer.id ? "#D6DBF5" : "",
      }
    const stylesAfterSubmit = {
      backgroundColor: /* if submitted */checkID === answer.id ? "green" : answer.isCorrect ? "salmon" : "",
    }
      // logici devam ettir
/*     const submittedStyles = {
        backgroundColor: selectedAnswer === answer.value ? "#azure" : "red",
      } */
    return (
      <button
        style={props.submit ? stylesAfterSubmit : styles}
        onClick={() => handleID(answer.id)}
        key={answer.id}
      >
        {answer.value}
      </button>
    );
  });

  function handleID(id){
    setCheckID(id)
    console.log(props.submit)
  }

/*   const handleResult = () => {
    setCheckResult(value)
  } */
  return (
    <div className="question-wrap">
      <div>
        <h4 key={props.qkey}>{props.question}</h4>
        {answersMap}
      </div>
    </div>
  );
}
