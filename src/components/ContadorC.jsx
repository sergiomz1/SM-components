import React, { useState } from "react";

export const Button = ({ value, onClick }) => {
  return <button onClick={() => onClick(value + 1)}>Boton Contar</button>;
};

export const Contador = ({ value }) => { 
  const [contador, setContador] = useState(value);  // se usa const para evitar sobre escribir el valor de contador 

  const handleClick = (newValue) => {
    setContador(newValue); // se usa setContador para actualizar el valor de contador
  };

  return (
    <>
      <h1>Contador: {contador}</h1>
      <Button value={contador} onClick={handleClick} />
    </>
  );
};
