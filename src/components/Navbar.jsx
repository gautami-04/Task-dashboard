import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex gap-6">

      <Link to="/">Home</Link>

      <Link to="/tasks">Tasks</Link>

    </nav>
  )
}

export default Navbar