import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Api = () => {
    //guardamos los datos de la api 
    //personajes es un array que contiene los datos de la api 
    //setPersonajes es una funcion que permite actualizar el estado de personajes 
    const [personajes, setPersonajes] = useState([]);
    //useEffect es un hook que permite ejecutar
    //codigo cuando el componente se renderiza por primera vez
    useEffect(() => {
        //funcion asincrona que permite obtener los datos de la api 
        const obtenerDatos = async () => {
            try {
                //fetch es una funcion que permite obtener datos de una api 
                const response = await fetch('https://rickandmortyapi.com/api/character');
                //convertimos la respuesta a json 
                const data = await response.json();
                //actualizamos el estado de personajes 
                setPersonajes(data.results);
            } catch (error) {
                console.error("Error al buscar datos:", error);
            }
        };
        obtenerDatos();
    }, []);

    // Objetos de estilo para que el código sea más limpio
    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '15px',
        overflow: 'hidden',
        display: 'flex',          // Activamos Flexbox
        flexDirection: 'column',   // Elementos uno abajo del otro
        height: '100%',            // Para que todas midan lo mismo
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    };

    const bodyStyle = {
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,               // Esto hace que el cuerpo ocupe todo el espacio disponible
        justifyContent: 'space-between' // Empuja el botón al fondo
    };

    return (
        <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ color: '#007bff', textAlign: 'center', fontWeight: 'bold', marginBottom: '30px' }}>
                Personajes de la API (REST)
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '20px'
            }}>
                {personajes.map((personaje) => (
                    <div key={personaje.id} style={cardStyle}>
                        <img
                            src={personaje.image}
                            alt={personaje.name}
                            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                        />

                        <div style={bodyStyle}>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', margin: '0 0 10px 0', color: '#333' }}>
                                    {personaje.name}
                                </h3>
                                <p style={{ color: '#666', fontSize: '0.9rem' }}>
                                    Especie: {personaje.species}
                                </p>
                            </div>

                            <Link
                                to={`/personaje/${personaje.id}`}
                                style={{
                                    backgroundColor: '#28a745',
                                    color: 'white',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    padding: '12px',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    display: 'block',
                                    marginTop: '15px'
                                }}
                            >
                                Ver Detalles
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Api;