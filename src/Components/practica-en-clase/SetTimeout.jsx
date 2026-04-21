import { useState, useEffect } from "react";

const timeout = () => {
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setCargando(false);
        }, 5000);

        return () => clearTimeout(setCargando)







    }, [])
    return (
        <div>
            {cargando ? (
                <div>
                    <p>Espere por favor...</p>
                    <h1>Cargandooo...</h1>
                </div>
            ) : (
                <div>
                    <p>¡Listo!</p>
                    <h1>Datos cargados ✅</h1>
                </div>
            )}
        </div>
    );
}

export default timeout


