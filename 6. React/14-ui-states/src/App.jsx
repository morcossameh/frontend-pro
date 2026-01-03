import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function loadTasks() {
    setIsLoading(true);
    setError("");

    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.3) {
        setError("Failed to load tasks, please try again.");
        setIsLoading(false);
      } else if (randomNumber < 0.6) {
        setTasks([]);
        setIsLoading(false);
      } else {
        setTasks([
          { id: 1, title: "Learn React UI state" },
          { id: 2, title: "Build todo list" },
        ]);
      }
      setIsLoading(false);
    }, 1200);
  }

  return (
    <div>
      <h1>Tasks</h1>

      <button onClick={loadTasks} disabled={isLoading}>Load Tasks</button>
      
      {isLoading ? (
        <p>Loading Tasks..</p>
      ) : error ? (
        <p>{error}</p>
      ) : tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        <ul>
          {tasks.map(t => (
            <li key={t.id}>{t.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
