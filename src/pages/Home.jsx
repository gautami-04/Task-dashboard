import { useState, useEffect } from "react"
import axios from "axios"

function Home() {

  const [advice, setAdvice] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    axios.get("https://api.adviceslip.com/advice")
      .then((res) => {
        setAdvice(res.data.slip.advice)
        setLoading(false)
      })

  }, [])

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-4">
        Random Advice
      </h1>

      {loading ? (
        <p>Loading advice...</p>
      ) : (
        <div className="bg-gray-100 p-4 rounded shadow">
          {advice}
        </div>
      )}

    </div>
  )
}

export default Home