import React from 'react'
import { useState } from 'react'

export const AddTarea = ({ addTarea }) => { // addTarea es una funcion que viene de ListadoAppMap.jsx
  const [first, setfirst] = useState('')
  
  const onInputChange = (event) => {
    setfirst(event.target.value)
    // console.log(first);

  }

  const onSubmit = (event) => {
    const envio = {
      name: first,
      visto : false
    }
    event.preventDefault()
    // console.log(first);
    addTarea(tarea => [...tarea, envio]) // ...tarea copia el array y agrega el nuevo elemento al final del array
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Algo que entra a la lista'
        value={first}
        onChange={(event) => onInputChange(event) }
      />
    </form>
    
  )
}

export default AddTarea