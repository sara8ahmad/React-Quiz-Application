import React, { useEffect } from 'react'

const Timer = ({dispatch , remainingSeconds}) => {

  const minutes = Math.floor( remainingSeconds / 60 );
  const seconds = remainingSeconds % 60 ;

useEffect(
    function(){
   const id = setInterval(()=> dispatch({type : "Tick"}),1000)
   return () => clearInterval(id)
    },[dispatch]
)

  return (
    <div className='timer'>{minutes} : {seconds}</div>
  )
}

export default Timer