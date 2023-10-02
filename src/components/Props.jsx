// props es un objeto que contiene todas las propiedades que se le pasan al componente desde el padre
import PropTypes from 'prop-types'

// { titulo='algo', name } desestructuracion 
export const Props = ( { titulo='algo', name, anios } ) => { // si del padre no llega nada se le asigna un valor por defecto a la prop ('algo' en este caso)
  
  return (
    <>
      <h1>{`hola esto viaja desde el padre y dice ${titulo} con ${anios - 5} años`}</h1>
      <h1>{name}</h1>
    </>
  )
}
 // definir si es o no requerido
Props.PropTypes = {
  titulo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  anios: PropTypes.number
}

// VAlores por defecto

Props.defaultProps = {
  name: 'vacio',
  anios: 22
}
