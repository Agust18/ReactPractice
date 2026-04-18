import { useState } from "react";

const Contacto = () => {
    // Estado para manejar los campos del formulario
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: ""
    });

    const [enviado, setEnviado] = useState(false);

    // Función para manejar los cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Función para manejar el envío
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados:", formData);
        // Aquí podrías conectar con un servicio de email o tu backend en PHP
        setEnviado(true);

        // Limpiar el formulario después de 3 segundos
        setTimeout(() => setEnviado(false), 3000);
        setFormData({ nombre: "", email: "", mensaje: "" });
    };

    // Estilos en línea
    const containerStyle = {
        maxWidth: "600px",
        margin: "50px auto",
        padding: "30px",
        backgroundColor: "#fff",
        borderRadius: "15px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif"
    };

    const inputStyle = {
        width: "100%",
        padding: "12px",
        marginBottom: "20px",
        borderRadius: "8px",
        border: "1px solid #ddd",
        fontSize: "16px",
        boxSizing: "border-box" // Importante para que el padding no agrande el input
    };

    const buttonStyle = {
        width: "100%",
        padding: "12px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "background-color 0.3s"
    };

    return (
        <div style={containerStyle}>
            <h2 style={{ textAlign: "center", color: "#333", marginBottom: "30px" }}>Contacto</h2>

            {enviado && (
                <div style={{ backgroundColor: "#d4edda", color: "#155724", padding: "10px", borderRadius: "8px", marginBottom: "20px", textAlign: "center" }}>
                    ¡Mensaje enviado con éxito!
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                />

                <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                />

                <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Mensaje</label>
                <textarea
                    name="mensaje"
                    rows="5"
                    placeholder="Escribe tu mensaje aquí..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: "none" }}
                    required
                ></textarea>

                <button type="submit" style={buttonStyle}>
                    Enviar Mensaje
                </button>
            </form>
        </div>
    );
};

export default Contacto;