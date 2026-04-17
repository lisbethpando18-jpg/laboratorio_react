import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">Plataforma educativa tecnológica</div>
        <h1>Aprende tecnología con talleres prácticos</h1>
        <p>
          Desarrolla habilidades reales en programación, diseño web y bases de datos
          con instructores expertos y proyectos del mundo real.
        </p>
        <div className="hero-actions">
          <Link to="/talleres" className="btn btn-white">Ver talleres</Link>
          <Link to="/inscripcion" className="btn btn-outline-white">Inscribirme ahora</Link>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-card">
          <span className="stat-number">6+</span>
          <span className="stat-label">Talleres disponibles</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">200+</span>
          <span className="stat-label">Estudiantes activos</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">100%</span>
          <span className="stat-label">Enfoque práctico</span>
        </div>
      </div>

      {/* Features */}
      <p className="section-title">¿Por qué elegir TallerTech?</p>
      <p className="section-sub">Diseñado para quienes aprenden haciendo</p>

      <div className="values-grid">
        <div className="value-card">
          <span className="value-icon">🎯</span>
          <div>
            <p className="value-title">Proyectos reales</p>
            <p className="value-desc">Cada taller culmina con un proyecto aplicable en el mundo laboral.</p>
          </div>
        </div>
        <div className="value-card">
          <span className="value-icon">⚡</span>
          <div>
            <p className="value-title">Ritmo flexible</p>
            <p className="value-desc">Estudia a tu propio ritmo con acceso al contenido las 24 horas.</p>
          </div>
        </div>
        <div className="value-card">
          <span className="value-icon">🤝</span>
          <div>
            <p className="value-title">Comunidad activa</p>
            <p className="value-desc">Conecta con otros estudiantes y resuelve dudas en tiempo real.</p>
          </div>
        </div>
        <div className="value-card">
          <span className="value-icon">📜</span>
          <div>
            <p className="value-title">Certificado incluido</p>
            <p className="value-desc">Obtén un certificado avalado al completar cada taller exitosamente.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;