import Button from "./components/Button";

export default function App() {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Delete</Button>
      <Button variant="ghost">Ghost</Button>

      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>

      <Button disabled>Disabled</Button>
      <Button loading>Save</Button>
    </div>
  );
}
