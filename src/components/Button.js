import React from 'react'

const Button = ({answer,dispatch,num,index}) => {
    if( answer === null) return null ;

    if (num-1 > index){
  return (
    <div>
        <button className="btn btn-ui" onClick={()=> dispatch({type : "newQuestion"})}>Next</button>
    </div>
  )}

  if(num-1 === index) {
    return (
      <div>
          <button className="btn btn-ui" onClick={()=> dispatch({type : "finished"})}>Finished</button>
      </div>
    )
  }

}

export default Button