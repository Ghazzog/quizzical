import React, { useState } from "react";

export default function Question(props) {
 
  const styles = {
    backgroundColor: props.isHeld ? "salmon" : "",
  };

  const answersMap = props.answers.map((answer) => {
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
    
  console.log(props.answers)
    props.answers.map(answered => {
        answered.id = props.answers.id ? {
            ...answered,
            isSelected: !answered.isSelected 
        } : answered
    })
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
