import React from 'react'

const Questions = ({question , answer, dispatch}) => {

console.log(question);
const hasAnswered = answer !== null;

    return (
    
    <div className="options">
       <h4>{question.question}</h4>        
       {
            question.options.map((option,index) => <button  className={`btn btn-option ${index === answer ? "answer" : ""} ${
                hasAnswered
                  ? index === question.correctOption
                    ? "correct"
                    : "wrong"
                  : ""
              }`} onClick={() => { dispatch({type:"newAnswer", payload:index}) } } 
            key={option}>{option}</button> )
        }
    </div>

  )
}

export default Questions