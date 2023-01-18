const Card = ({ data, }) => {
    return (
        <div>
            <div>{data.name}</div>
            <div>{data.task}</div>
            <div>{data.description}</div>
            <button onClick={(x) => data.handleUpdate(x)}>Editar</button>
            <button onClick={(x) => data.handleDelete(x)}>Eliminar</button>
        </div>
    )
}

export default Card