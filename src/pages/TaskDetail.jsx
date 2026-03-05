import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

function TaskDetail() {

  const { id } = useParams()
  const [task, setTask] = useState(null)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        setTask(res.data)
      })
  }, [id])

  if (!task) {
    return <p className="p-6">Loading task...</p>
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Task Details
      </h1>

      <p><b>ID:</b> {task.id}</p>
      <p><b>Status:</b> {task.completed ? "Completed" : "Pending"}</p>

      <Link
        to="/tasks"
        className="text-blue-600 underline block mt-4"
      >
        Back to Tasks
      </Link>

    </div>
  )
}

export default TaskDetail