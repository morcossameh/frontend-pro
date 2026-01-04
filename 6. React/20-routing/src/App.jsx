import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import TodoPro from "./pages/TodoPro";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="todos" element={<TodoPro />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
