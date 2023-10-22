import React from 'react'
import { useState } from 'react'

export const AddTarea = ({ addTarea }) => {
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
    addTarea(tarea => [...tarea, envio])
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