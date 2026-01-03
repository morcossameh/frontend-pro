import { useToggle } from "./hooks/toggle";

function App() {
  const { value: showContent, toggle, setTrue, setFalse } = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>
        {showContent ? "Hide Content" : "Show Content"}
      </button>
      <button onClick={setFalse} disabled={!showContent}>
        Hide Content
      </button>
      <button onClick={setTrue} disabled={showContent}>
        Show Content
      </button>

      {showContent && <p>Hello, Guest</p>}
    </div>
  );
}

export default App;
