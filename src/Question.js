import React, { useState } from "react";

export default function Question(props) {
    const [checkID, setCheckID] = useState()
    const [checkTrue, setCheckTrue] = useState(false)
  /* const styles = {
    backgroundColor: checkID ===  ? "salmon" : "",
  }; */

  const answersMap = props.answers.map((answer) => {
    const styles = {
        backgroundColor: checkID === answer.id ? "salmon" : "",
      }
    return (
      <button
        style={styles}
        onClick={() => handleID(answer.id)}
        key={answer.id}
      >
        {answer.value}
      </button>
    );
  });

  function handleID(id){
    setCheckID(id)
  }
  return (
    <div className="question-wrap">
      <div>
        <h4 key={props.qkey}>{props.question}</h4>
        {answersMap}
      </div>
    </div>
  );
}
