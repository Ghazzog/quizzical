import React from "react";

function Quiz(props) {
    return(
    <div className="quiz-wrapper">
        <button onClick={props.onChange}>Set Main Page to True</button>
    </div>
  
    )
}

export default Quiz