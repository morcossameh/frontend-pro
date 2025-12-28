import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);

  // const [isOpen, setIsOpen] = useState(false);

  // if(isOpen) {
  //   const [x, setX] = useState(0)
  // }

  const [name, setName] = useState("")

  return (
    <div>
      {/* <h1>Count: {count}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>Decrease</button> */}

      {/* <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>

      {isOpen && <p>I'm visible now</p>} */}

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter you name..."
      />

      {name && <p>Hello, {name}</p>}
    </div>
  );
}

export default App;
