import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header className="root-header">
        <h1 className="root-title">React Router Demo</h1>

        <nav className="root-nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/todos">
            Todos
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
