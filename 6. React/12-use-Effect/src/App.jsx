import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [test, setTest] = useState(false);

  // 1. one time
  // useEffect(() => {
  //   document.title = `Count: ${count}`
  // }, [])

  // 2. with every render
  // useEffect(() => {
  //   document.title = `Count: ${count}`
  // })

  // 3. dependency array
  // useEffect(() => {
  //   document.title = `Count: ${count}`
  // }, [count])

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("tick");
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          setTest(!test);
        }}
      >
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
