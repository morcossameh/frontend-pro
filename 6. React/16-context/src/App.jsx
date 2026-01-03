import { ThemeProvider, useTheme } from "./ThemeContext";

function Header() {
  const { theme } = useTheme();

  return (
    <div>
      <h2>Header theme: {theme}</h2>
    </div>
  );
}

function Page() {
  return (
    <div>
      <p>Page content...</p>
      <Header />
    </div>
  );
}

function AppContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>Context Example</h1>

      <button onClick={toggleTheme}>Toggle theme (current: {theme})</button>

      <Page />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
