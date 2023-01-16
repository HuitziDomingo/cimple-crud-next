'use client'
import { useState } from 'react'

const Crud = () => {

  const [name, setName] = useState("")
  const [task, setTask] = useState("")
  const [description, setDescription] = useState("")
  const [id, setId] = useState(1)
  const [arr, setArr] = useState([])


  const handleSubmit = e => {
    e.preventDefault()
    if (name && task && description) {
      setId(id + 1)
      setArr([...arr, { name, task, description, id }])

    }
    else alert("llenar todos los campos")

    setName('')
    setDescription('')
    setTask('')
  }


  const handleUpdate = (data) => {
    setName(data.name)
    setTask(data.task)
    setDescription(data.description)

    // setArr({ name: data.name, task: data.task, description: data.description })
  }

  const handleDelete = data => {
    setArr(arr.filter(d => d.id !== data.id))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
          placeholder="Nombre"
        />

        <input
          type="text"
          onChange={e => setTask(e.target.value)}
          value={task}
          placeholder="Tarea"
        />

        <input
          type="text"
          onChange={e => setDescription(e.target.value)}
          value={description}
          placeholder="Descripcion"
        />
        <button>Crear</button>
      </form>

      <div>
        {
          arr.map((x, k) => (
            <div key={k}>
              <div>{x.name}</div>
              <div>{x.task}</div>
              <div>{x.description}</div>
              <div>{x.id}</div>
              <button onClick={() => handleUpdate(x)}>Editar</button>
              <button onClick={() => handleDelete(x)}>Eliminar</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Crud