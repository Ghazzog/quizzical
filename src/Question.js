import React from "react";

export default function Question(props){
    
    return (
        <div className="question-wrap">

              {props.question} 
            <button className="mainButton" onClick= {props.restart}>Restart Game</button>
            <button className="mainButton" onClick= {props.submit}>Submit</button>
{/*             <button onClick= {props.showAnswers}> Show Answers </button> */}
            <p>You have played {props.repititionCount} times</p>
        </div>
    )
}