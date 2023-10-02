import React from "react";
import ReactDOM from "react-dom/client";
import CompoUno from './components/App.jsx'
import { Uno } from "./components/uno.jsx";
import { Props } from "./components/Props.jsx";
import { Contador } from "./components/ContadorC.jsx";
import ListadoApp from "./components/ListadoApp.jsx";
import ListadoAppMap from "./components/ListadoAppMap.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <CompoUno/> */}
    {/* <Uno />  */}
    {/* auto conclusive tag */}
    {/* <Props titulo='--> props desde el Padre' name='Raul Peña' />  */}
    {/* <Contador value={1}/> */}
    {/* <ListadoApp/> */}
    <ListadoAppMap/>
  </React.StrictMode>
);

// Los componentes son bloques de construcción de la interfaz de usuario de la interfaz de usuario
// encapsulan la lógica de una parte de la interfaz
// pequeños bloques de código que construyen la app