
import { useState } from "react";

function NuevoComponente() {
    const nombre = "de Agustin";
    const [contador, setContador] = useState(1);

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Multiplicador de {nombre}</h1>
            <button 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                onClick={() => setContador(contador * 5)}
            >
                MULTIPLICAR POR 2
            </button>
            <h2 className="mt-4 text-2xl font-bold">Resultado: {contador}</h2>
        </div>
    );
    
}
export default NuevoComponente;