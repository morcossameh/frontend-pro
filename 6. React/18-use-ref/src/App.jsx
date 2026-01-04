import { useRef, useState } from "react";

function App() {
  const [seconds, setSeconds] = useState(0)
  const intervalRef = useRef(null);

  function start() {
    if (intervalRef.current) return

    intervalRef.current = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)
  }

  function stop() {
    console.log("here")
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  function reset() {
    stop()
    setSeconds(0)
  }

  return (
    <div>
      <p>Seconds: {seconds}</p>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
