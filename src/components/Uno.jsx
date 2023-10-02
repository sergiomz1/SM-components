//  con ffc function Uno() {
//   return <h1>Hola a todos</h1>;
// }

// export default Uno;

// rafc
import './App.css'  // importar css en el componente para que se aplique solo a este componente y no a toda la app

const string = ' const string = "Hola a todos" ';
const number = 1;
const boolean = true;
const array = [1, 2, 3, "hola", "chao"];
const funcion = () => "hola desde la función: ";
const objeto = { nombre: "Juan", apellido: "Perez" };
const fecha = new Date();

export const Uno = () => {
  return (
    // <> fragmento de código se usa para envolver todo el código en un padre en jsx <Fragment>
    <>
      <p>{string}</p>
      {/* {} para poder usar código js dentro de jsx  */}
      <p>{number}</p>
      <p>{boolean}</p>
      <p>{array}</p>
      <p>{funcion()}</p>
      <p>{objeto.nombre}</p>
      {/* sttringify se usa para convertir JSOn en string */}
      <p>{JSON.stringify(objeto)}</p> 
      <h1>{JSON.stringify(fecha)}</h1>
    </>
  );
};

