import React from 'react'

// const Button = () => {
//   return(
//     <button>
//       <div>Boton componente</div>
//     </button>
//   )
// }

export const Contador = ({value}) => {

  function handleClick(){ //, args
    value +=1
    console.log(value)
  // console.log(args)
  }

  return (
    // <button onClick={ handleClick }>
    // <button onClick={ ( event ) => handleClick (event, 'otra cosa')}>
    <>
      <h1>Contador </h1>
      <p>{value}</p>
      <button onClick={handleClick}>Boton</button>
    </>
  )
}


