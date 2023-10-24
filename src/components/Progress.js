import React from 'react'

const Progress = ({index,points,num ,maxPoints,answer}) => {
  return (
    <header className='progress'>
        <progress max={num} value={index + Number( answer !== null )} />
        <p><strong>{index + 1}</strong> / {num}</p>
        <p><strong>{points}</strong> / {maxPoints} </p>
    </header>
  )
}

export default Progress;