import { useState } from "react";
//recibimos los props desde App.jsx y los guardamos en el estado local que es tareas
const EnviarTarea = (props) => {
    //estado local para manejar lo que el usuario escribe
    const [inputValue, setInputValue] = useState("");
    //aca manejamos el envio de la tarea
    const manejarEnvio = (e) => {
        e.preventDefault(); // Evita que la página se recargue
        //si el valor es igual a vacio, no se agrega la tarea
        if (inputValue.trim() === "") return; // No agregar tareas vacías

        //Creamos el objeto
        const nuevaTarea = {
            id: Date.now(),
            texto: inputValue,
            completada: false
        }
        //aca enviamos la tarea al componente padre
        props.agregar(nuevaTarea);
        //limpiamos el input
        setInputValue("");
    }

    return (
        <form onSubmit={manejarEnvio} style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
            padding: "10px"
        }}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="tarea pendiente amigazo"
                style={{

                    padding: "10px 15px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    fontSize: "16px",

                }}
            />
            <button type="submit" style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "6px",



            }}>
                Agregar
            </button>
        </form>
    )
}

export default EnviarTarea;