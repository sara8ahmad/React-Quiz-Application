import React from 'react'

const StartScreen = ({dispatch}) => {
  return (
    
<div className="container">

<div className="text">
<h1>Master the Coding Interview Without the Endless Grind.</h1>
<div className='content'> React Pro will help you crush the technical interview in less time and with fewer 
    sleepless nights grinding away random problems. You will learn the key patterns necessary 
    to solve almost any interview question and gain the systematic knowledge you need
     to prove your expertise. Be more confident as you walk into that interview! </div>
     <button className="btnn btn-ui" onClick={()=>dispatch({type:"Start"})}>Let`s Start</button>

</div>

</div>
      
  )
}

export default StartScreen