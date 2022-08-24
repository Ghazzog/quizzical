import React, {useState, useEffect} from "react";

function StartPage(props) {

    

    return(
    <div className="quiz-wrapper">
        <h1>Quizzical</h1>
        <p>Let's test your knowledge</p>
        <button className="mainButton" onClick={props.showGame}>Start the Game</button>
    </div>
  
    )
}

export default StartPage;