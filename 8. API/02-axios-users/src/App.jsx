import { useEffect, useState } from "react";
import { api } from "./api/client";

function App() {
  const [users, setUsers] = useState([]);
  const [fetchloading, setFetchLoading] = useState(true);
  const [createloading, setCreateLoading] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await api.get("/users");
        setUsers(data.data);
      } catch (e) {
        setError("Something went wrong, try again ...");
      }
      setFetchLoading(false);
    }

    loadUsers();
  }, []);

  async function addUser() {
    try {
      const newUser = { name: "New User", email: "new@test.com" };

      setCreateLoading(true);
      const data = await api.post("/users", newUser);

      setUsers((prev) => [data.data, ...prev]);
    } catch (e) {
      setError("Something went wrong, try again ...");
    }
    setCreateLoading(false);
  }

  async function deleteUser(id) {
    try {
      // const newUser = { name: "New User", email: "new@test.com" };

      await api.delete(`/users/${id}`)

      setUsers((prev) => prev.filter((u) => u.id != id));
    } catch (e) {
      setError("Something went wrong, try again ...");
    }
    setCreateLoading(false);
  }


  if (fetchloading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Users</h1>
      <button onClick={addUser} disabled={createloading}>
        {createloading ? "Adding user..." : "Add user"}
      </button>

      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name} <button onClick={() => deleteUser(u.id)}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
