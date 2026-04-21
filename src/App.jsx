import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import logoImagen from './assets/images/descarga.jpg';
import Hero from './Components/Hero';
import NuevoComponente from './Components/practica-en-clase/Clase2';
import StringChange from "./Components/practica-en-clase/ComponenteString";
import Input from "./Components/practica-en-clase/ComponenteInput";
import Api from "./Components/api";
import DetallePersonaje from "./Components/detallePersonaje";
import Contacto from "./Components/contacto";
import TaskInput from "./Components/practica-en-clase/TaskInput";
import TaskList from "./Components/practica-en-clase/Tasklist";
import ContadorUseEffect from "./Components/practica-en-clase/ContadorUseEffect";
import Timeout from "./Components/practica-en-clase/SetTimeout";




import './App.css';

function App() {
  //aca guardamos los props que recibimos desde TaskInput.jsx
  const [tareas, setTareas] = useState([]);
  //aca manejamos el envio de la tarea de TaskInput.jsx
  const Agregar = (TareaRecibida) => {
    // console.log("Acaba de llegar esto desde el hijo:", TareaRecibida);
    setTareas([...tareas, TareaRecibida])
  }
  //funcion donde le pasamos por id la tarea que queremos cambiar
  const Estado = (id) => {
    //recorremos el array de tareas

    const nuevasTareas = tareas.map(tarea => {
      if (tarea.id === id) {
        return { ...tarea, completada: !tarea.completada }
      }
      return tarea;
    })
    setTareas(nuevasTareas);
  }

  const eliminar = (id) => {
    //si la tarea es igual al id, la eliminamos
    const nuevasTareas = tareas.filter(tarea => tarea.id !== id)
    //actualizamos el estado
    setTareas(nuevasTareas);
  }


  return (
    <BrowserRouter>
      {/* Elementos que se ven en TODAS las páginas */}
      <Navbar titulo="AC" logo={logoImagen} />

      {/* <NuevoComponente />
      <StringChange/>
       <Input/>*/}








      <Routes>
        <Route path="/" element={
          <>
            {/* <Hero /> */}
            {/* <TaskInput
              agregar={Agregar}
            /> */}
            {/* <TaskList
              tareas={tareas}
              cambiarEstado={Estado}
              eliminar={eliminar}
            /> */}
            {<ContadorUseEffect />}
            {/* <Timeout /> */}
          </>
        } />
        <Route path="/" element={<h1>Bienvenido a mi Web</h1>} />
        <Route path="/personaje/:id" element={<DetallePersonaje />} />
        <Route path="/proyectos" element={<Api />} />
        <Route path="/contacto" element={<Contacto />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;