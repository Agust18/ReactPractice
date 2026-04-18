import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const DetallePersonaje = () => {
    const { id } = useParams();
    const [personaje, setPersonaje] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then(data => setPersonaje(data));
    }, [id]);

    if (!personaje) return <p style={{ textAlign: 'center', marginTop: '50px' }}>Cargando datos del personaje...</p>;

    return (
        <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
            <Link to="/proyectos" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>
                ← Volver al listado
            </Link>

            <div style={{
                marginTop: '30px',
                display: 'flex',
                flexDirection: 'row',
                gap: '40px',
                backgroundColor: '#f8f9fa',
                padding: '30px',
                borderRadius: '20px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                alignItems: 'center',
                flexWrap: 'wrap' // Para que en el celu se ponga uno abajo del otro
            }}>
                {/* Contenedor de Imagen */}
                <div style={{ flex: '1', minWidth: '250px' }}>
                    <img
                        src={personaje.image}
                        alt={personaje.name}
                        style={{ width: '100%', borderRadius: '15px', border: '5px solid white' }}
                    />
                </div>

                {/* Contenedor de Información */}
                <div style={{ flex: '2', minWidth: '250px' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>{personaje.name}</h1>

                    <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                        <p><strong>ID:</strong> <span style={{ color: '#666' }}>{personaje.id}</span></p>
                        <p><strong>Estado:</strong> <span style={{
                            padding: '4px 10px',
                            borderRadius: '5px',
                            backgroundColor: personaje.status === 'Alive' ? '#d4edda' : '#f8d7da',
                            color: personaje.status === 'Alive' ? '#155724' : '#721c24'
                        }}>{personaje.status}</span></p>
                        <p><strong>Especie:</strong> {personaje.species}</p>
                        <p><strong>Género:</strong> {personaje.gender}</p>
                        <p><strong>Origen:</strong> {personaje.origin?.name}</p>
                        <p><strong>Localización:</strong> {personaje.location?.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetallePersonaje;