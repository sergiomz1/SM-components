import React, { useState } from 'react'
import { UserList } from './userList'


export const UsersApp = () => {

  const [endPoint, setEndpoint] = useState('users')

  const handleFetch = () => {
    setEndpoint('comments')
  }
  return (
    <div>
      <h1>Lista de Usuarios desde <p> https://jsonplaceholder.typicode.com/users </p></h1>
      <UserList endPoint={endPoint}></UserList>
      <button onClick={handleFetch}>LLamar a la API</button>
    </div>
  )
}
