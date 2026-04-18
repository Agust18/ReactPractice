import TaskItem from "./TaskItem";//importamos el componente hijo para poder usarlo y pasarle props

const TaskList = (props) => {
    return (
        <ul style={{ padding: 0 }}>
            {props.tareas.map((t) => (
                <TaskItem
                    key={t.id}
                    tarea={t}
                    //aca le pasamos las props al componente hijo
                    Estado={props.cambiarEstado} // Viene de App
                    Eliminar={props.eliminar}      // Viene de App
                />
            ))}
        </ul>
    );
};

export default TaskList;