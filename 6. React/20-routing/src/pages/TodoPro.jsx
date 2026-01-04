import { useEffect, useMemo, useRef, useState } from "react";

function makeId() {
  console.log(crypto.randomUUID());
  return crypto.randomUUID();
}

function TodoRow({ todo, setTodos }) {
  const toggleTodo = () => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const removeTodo = () => {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  };

  const selectTodo = () => {
    setTodos((prev) =>
      prev.map((t) => (t.id === todo.id ? { ...t, selected: !t.selected } : t))
    );
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.selected}
        onChange={selectTodo}
        title="Select"
      />

      <span className={`todo-title ${todo.completed ? "completed" : ""}`}>
        {todo.title}
      </span>

      <button
        className={`btn btn-sm ${
          todo.completed ? "btn-complete-undo" : "btn-complete"
        }`}
        onClick={toggleTodo}
      >
        {todo.completed ? "Undo" : "Complete"}
      </button>

      <button className="btn btn-danger btn-sm" onClick={removeTodo}>
        Delete
      </button>
    </li>
  );
}

export default function TodoPro() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos-pro");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("all"); // all | active | completed
  const [query, setQuery] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("todos-pro", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    const title = e.target.title.value.trim();
    if (!title) return;

    setTodos((prev) => [
      {
        id: makeId(),
        title,
        completed: false,
        selected: false,
        createdAt: Date.now(),
      },
      ...prev,
    ]);

    e.target.reset();
    inputRef.current?.focus();
  };

  const visibleTodos = useMemo(() => {
    const q = query.trim().toLowerCase();

    return todos.filter((todo) => {
      const matchesFilter =
        filter === "all"
          ? true
          : filter === "active"
          ? !todo.completed
          : todo.completed;

      const matchesQuery = q ? todo.title.toLowerCase().includes(q) : true;

      return matchesFilter && matchesQuery;
    });
  });

  const selectedCount = useMemo(() =>
    todos.reduce((acc, t) => acc + (t.selected ? 1 : 0), 0)
  );

  const completedCount = useMemo(() =>
    todos.reduce((acc, t) => acc + (t.completed ? 1 : 0), 0)
  );

  const allSelected = todos.length > 0 && selectedCount === todos.length;

  return (
    <div className="app-container">
      <h1 className="app-title">Todo Pro</h1>

      <form className="add-form" onSubmit={addTodo}>
        <input
          name="title"
          ref={inputRef}
          placeholder="Add a task..."
          className="add-input"
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>

      <div className="filter-bar">
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => setFilter("all")}
          disabled={filter === "all"}
        >
          All
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => setFilter("active")}
          disabled={filter === "active"}
        >
          Active
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => setFilter("completed")}
          disabled={filter === "completed"}
        >
          Completed
        </button>

        <div className="fitler-spacer" />

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="search-input"
        />
      </div>

      <div className="tasks-count">Tasks: {todos.length}</div>

      <div className="bulk-actions">
        <label className="select-all-label">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={() => {
              setTodos((prev) =>
                prev.map((todo) => ({ ...todo, selected: !allSelected }))
              );
            }}
          />
          Select all
        </label>

        <span className="stats-text">
          Selected: {selectedCount} | Completed: {completedCount}
        </span>

        <button
          className="btn btn-secondary btn-sm"
          disabled={selectedCount === 0}
          onClick={() =>
            setTodos((prev) =>
              prev.map((t) => (t.selected ? { ...t, completed: true } : t))
            )
          }
        >
          Mark selected completed
        </button>

        <button
          className="btn btn-secondary btn-sm"
          disabled={selectedCount === 0}
          onClick={() => {
            setTodos((prev) => prev.filter((t) => !t.selected));
          }}
        >
          Delete selected
        </button>

        <button
          className="btn btn-secondary btn-sm"
          disabled={completedCount === 0}
          onClick={() => {
            setTodos((prev) => prev.filter((t) => !t.completed));
          }}
        >
          Clear completed
        </button>
      </div>

      {visibleTodos.length === 0 ? (
        <div className="empty-state">
          {todos.length === 0
            ? "No tasks yet. Add your first task 👆"
            : "No results for this filter/search."}
        </div>
      ) : (
        <ul className="todo-list">
          {visibleTodos.map((todo) => (
            <TodoRow key={todo.id} todo={todo} setTodos={setTodos} />
          ))}
        </ul>
      )}
    </div>
  );
}
