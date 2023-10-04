import React from "react";
import ReactDOM from "react-dom/client";
import { Uno } from "./components/uno.jsx";
import { Props } from "./components/Props.jsx";
import { ContadorC } from "./components/ContadorC.jsx";
// import ListadoApp from "./components/ListadoApp.jsx";
import ListadoAppMap from "./components/AppMap/ListadoAppMap.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Uno />  */}
    {/* auto conclusive tag */}
    {/* <Props titulo='--> props desde el Padre' name='Raul Peña' />  */}
    {/* <ContadorC value={1}/> */}
    <ListadoAppMap/>
  </React.StrictMode>
);

// Los componentes son bloques de construcción de la interfaz de usuario de la interfaz de usuario
// encapsulan la lógica de una parte de la interfaz
// pequeños bloques de código que construyen la app