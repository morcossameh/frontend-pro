import { memo, useCallback, useState } from "react";

const ChildComponent = memo(function Child({ onAction }) {
  console.log("Child render")
  return <button onClick={onAction}>Child Action</button>
})

function App() {
  const [count, setCount] = useState(0);

  // const title = useMemo(() => ({
  //   title: "Hello"
  // }), [])

  const handleAction = useCallback(() => {
    alert("Action!")
  }, []);

  return (
    <div>
      <h1>React Performance</h1>

      <button onClick={() => setCount((c) => c + 1)}>
        Increment: {count}
      </button>

      <ChildComponent onAction={handleAction} />
    </div>
  );
}

export default App;
