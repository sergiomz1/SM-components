import React from 'react'

const Items = ({name, visto}) => {

  return(
    <li>
      {name}
      {visto? '✔' : '❌'}
      {/* windows + . para usar iconos*/}
    </li>
  )
}

const ListadoApp = () => {
  return (
    <>
    <h1>Listado de temas vistos</h1>
    <ol>
      <Items name='Proyecto Tienda' visto={true}/>
      <Items name='Portafolio' visto={true}/>
      <Items name='User GitHub' visto={true}/>
      <Items name='Commits' visto={true}/>
      <Items name='React components' visto={false}/>
      <Items name='NodeJs' visto={false}/>
      <Items name='React Native' visto={true}/>
      <Items name='UseState' visto={false}/>
    </ol>
    </>
  )
}

export default ListadoApp