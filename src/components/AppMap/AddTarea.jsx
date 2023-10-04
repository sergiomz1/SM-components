import React from 'react'
import { useState } from 'react'

function AddTarea() {
  const [first, setfirst] = useState('')
  
  const onInputChange = (event) => {
    setfirst(event.target.value)
    console.log(first);
  }

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(first);
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