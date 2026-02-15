import { useEffect, useState } from "react"

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data)
  //       setLoading(false)
  //     })
  //     .catch((err) => {
  //       setError("Something went wrong, try again ...")
  //       console.error(err)
  //       setLoading(false)
  //     })
  // }, [])

  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")

        if (!res.ok) {
          throw new Error("Request failed")
        }

        const data = await res.json()
        setUsers(data)
      } catch (e) {
        setError("Something went wrong, try again ...")
      }
      setLoading(false)
    }

    loadUsers()
  }, [])

  if(loading) return <p>Loading...</p>
  if(error) return <p>{error}</p>

  return (
    <div>
      <h1>Users</h1>

      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
