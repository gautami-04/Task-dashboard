import { Link } from "react-router-dom"
import { useState } from "react"

function TaskCard({ task }) {

  const [title, setTitle] = useState(task.title)
  const [editing, setEditing] = useState(false)

  return (
    <div
      className={`p-4 rounded shadow border-l-4
      ${task.completed ? "bg-green-100 border-green-500" : "bg-yellow-100 border-yellow-500"}`}
    >

      {editing ? (
        <input
          className="border p-1 w-full mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <h2 className="font-semibold mb-2"> Task {task.id} </h2>
      )}

      <p className="mb-2">
        Status: {task.completed ? "Completed" : "Pending"}
      </p>

      <div className="flex gap-3">

        <button
          className="text-sm bg-blue-500 text-white px-2 py-1 rounded"
          onClick={() => setEditing(!editing)}
        >
          {editing ? "Save" : "Edit"}
        </button>

        <Link
          to={`/tasks/${task.id}`}
          className="text-blue-600 underline text-sm"
        >
          View Details
        </Link>

      </div>

    </div>
  )
}

export default TaskCard