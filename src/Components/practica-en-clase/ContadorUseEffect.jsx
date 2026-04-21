import { useState, useEffect } from "react";

const ContadorUseEffect = () => {
    //aca guardamos el contador
    //al no poder crear estados dentro de useEffect, usamos una funcion dentro de useState
    //asi se ejecuta una sola vez al cargar la pagina
    //pero cumple la funcion de guardar el estado
    const [contador, setContador] = useState(() => {
        //aca guardamos el contador en el local storage
        const saved = localStorage.getItem("contador");
        //si existe guardamos el contador, si no guardamos 0
        return saved ? parseInt(saved) : 0;
    });

    useEffect(() => {
        //guardamos el contador en el local storage
        localStorage.setItem("contador", contador);
        //mostramos el contador
        console.log("Guardado y actualizado");
    }, [contador]);

    return (
        <div>
            <h1>Contador (Estado): {contador}</h1>


            <button onClick={() => setContador(contador - 1)}>Restar</button>
            <button onClick={() => setContador(contador + 1)}>Sumar</button>
        </div>
    );
};

export default ContadorUseEffect;
