const TaskItem = (props) => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            borderBottom: "1px solid #ddd",
            alignItems: "center"
        }}>
            <span style={{ textDecoration: props.tarea.completada ? "line-through" : "none" }}>
                {props.tarea.texto}
            </span>

            <div>
                <button onClick={() => props.Estado(props.tarea.id)}>
                    {props.tarea.completada ? "Desmarcar" : "Marcar"}
                </button>
                <button
                    onClick={() => props.Eliminar(props.tarea.id)}
                    style={{ marginLeft: "10px", color: "red" }}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default TaskItem;