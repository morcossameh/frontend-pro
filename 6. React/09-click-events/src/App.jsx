function App() {
  let quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "Believe you can and you’re halfway there. - Theodore Roosevelt",
    "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
  ];

  const onClick = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(quotes[randomIndex]);
  };

  return (
    <>
      <p>
        <button onClick={onClick}>Click me</button>
      </p>

      <p>
        <button onDoubleClick={onClick}>Double click me</button>
      </p>

      <h1 onMouseEnter={onClick}>onMouseEnter</h1>

      <h1 onMouseLeave={onClick}>onMouseLeave</h1>

      <img src="https://picsum.photos/200/300" alt="random image" onClick={onClick} />
    </>
  );
}

export default App;
