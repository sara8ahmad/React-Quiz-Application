import React from 'react'

const Finished = ({maxPoints,points,dispatch}) => {
    const percentage = (points/maxPoints) * 100;
    
  return (
    <div>
      <p className='result'> You Scored <strong> {points} Out of {maxPoints} Points </strong> ({Math.ceil(percentage)})%</p>

      <button className="btn btn-ui" onClick={()=> dispatch({type : "restart"})}>Restart</button>
    </div>
  )
}

export default Finished