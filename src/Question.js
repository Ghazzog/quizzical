import React from "react";

export default function Question(props){
    
    return (
        <div className="question-wrap">
             <div>
                    <h4>{props.question}</h4>
                    <ul>
                        <button >{props.answer1}</button>
                        <button >{props.answer2}</button>
                        <button >{props.answer3}</button>
                        <button >{props.answer4}</button>
                    </ul>
                </div>
        </div>
    )
}