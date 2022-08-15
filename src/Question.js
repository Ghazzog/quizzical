import React from "react";

export default function Question(props){
    const styles = {
        backgroundColor: props.isHeld ? 'salmon' : ''
    }
    return (
        <div className="question-wrap">
             <div>
                    <h4 key={props.qkey}>{props.question}</h4>
                    <ul>
                        <button onClick={props.handleCli} style={styles} key={props.a1key}>{props.answer1}</button>
                        <button onClick={props.handleClic} key={props.a2key}>{props.answer2}</button>
                        <button onClick={props.handleClicc} key={props.a3key}>{props.answer3}</button>
                        <button onClick={props.handleClicce} key={props.a4key}>{props.answer4}</button>
                    </ul>
                </div>
        </div>
    )
}