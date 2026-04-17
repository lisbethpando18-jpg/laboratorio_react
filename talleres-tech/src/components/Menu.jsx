import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="nav-brand">
          <div className="nav-logo-icon">TT</div>
          <span className="nav-brand-name">Taller<span>Tech</span></span>
        </NavLink>

        <div className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/talleres"
            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
          >
            Talleres
          </NavLink>
          <NavLink
            to="/nosotros"
            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/inscripcion"
            className={({ isActive }) => "nav-link nav-cta" + (isActive ? " active" : "")}
          >
            Inscribirme
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Menu;