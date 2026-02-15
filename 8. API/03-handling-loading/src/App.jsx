import { useEffect, useState } from "react";
import { api } from "./api/client";

function App() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState(null);

  const [deletingId, setDeletingId] = useState(null);

  function getErrorMessage(error) {
    if (!error.response) {
      return "There’s a connection problem. Please try again.";
    }

    const status = error.response.status;

    if (status === 400)
      return "There’s an issue with the request. Check the data you sent.";
    if (status === 401) return "You need to log in again.";
    if (status === 403) return "You’re not allowed to perform this action.";
    if (status === 404) return "The resource was not found (Not Found).";
    if (status >= 500) return "The server has an issue. Try again later.";

    return "Something unexpected happened. Please try again.";
  }

  async function loadUsers() {
    setStatus("loading");
    setError(null);

    try {
      const res = await api.get("/users");

      if (Math.random() > 0.5) {
        throw new Error("Failed to load users");
      }

      setUsers(res.data);
      setStatus("success");
    } catch (e) {
      setError(getErrorMessage(e));
      setStatus("error");
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  async function deleteUser(id) {
    setDeletingId(id);

    try {
      await api.delete(`/users/${id}`);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (e) {
      alert(getErrorMessage(e));
    } finally {
      setDeletingId(null);
    }
  }

  function UsersSkeleton() {
    return (
      <ul>
        {Array.from({ length: 6 }).map((_, i) => (
          <li key={i} style={{ opacity: 0.5 }}>
            Loading user...
          </li>
        ))}
      </ul>
    );
  }
  if (status === "loading") {
    return (
      <div>
        <h1>Users</h1>
        <UsersSkeleton />
      </div>
    );
  }

  if (status === "error") {
    return (
      <div>
        <h1>Users</h1>
        <button onClick={loadUsers}>Try again</button>
        <p>{error}</p>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {users.map((u) => (
            <li key={u.id}>
              {u.name}{" "}
              <button
                onClick={() => deleteUser(u.id)}
                disabled={deletingId === u.id}
              >
                {deletingId === u.id ? "Deleting..." : "Delete"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
}

export default App;
