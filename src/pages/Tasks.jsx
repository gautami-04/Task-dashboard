import { useEffect, useState } from "react"
import axios from "axios"
import TaskCard from "../components/TaskCard"

function Tasks() {

  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => {
        setTasks(res.data)
        setLoading(false)
      })

  }, [])

  if (loading) {
    return <p className="p-6">Loading tasks...</p>
  }

  return (

    <div className="p-6 grid gap-4">

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}

    </div>

  )
}

export default Tasks