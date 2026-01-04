import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { lazy } from "react";

// import TodoPro from "./pages/TodoPro";
// import Home from "./pages/Home";
// import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const TodoPro = lazy(() => import("./pages/TodoPro"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
