import Button from "./components/Button";
import { FaTrash, FaPlus } from "react-icons/fa"

export default function App() {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <Button startIcon={<FaPlus />}>Add new Element</Button>
      <Button startIcon={<FaTrash />} variant="danger">Delete</Button>
    </div>
  );
}
