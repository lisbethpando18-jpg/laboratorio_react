function Nosotros() {
  return (
    <div>
      <div className="page-header">
        <p className="page-tag">Quiénes somos</p>
        <h2 className="page-title">Sobre TallerTech</h2>
        <p className="page-desc">
          Somos un equipo apasionado por democratizar la educación tecnológica.
          Creemos que aprender a programar abre puertas a mejores oportunidades.
        </p>
      </div>

      {/* Team */}
      <p className="section-title" style={{ marginBottom: "1.25rem" }}>Nuestro equipo</p>
      <div className="team-grid" style={{ marginBottom: "2.5rem" }}>
        <div className="team-card">
          <div className="team-avatar av-blue">AM</div>
          <p className="team-name">Ana Martínez</p>
          <p className="team-role">Fundadora & Instructora React</p>
        </div>
        <div className="team-card">
          <div className="team-avatar av-orange">CR</div>
          <p className="team-name">Carlos Ríos</p>
          <p className="team-role">Instructor Backend & Python</p>
        </div>
        <div className="team-card">
          <div className="team-avatar av-green">LP</div>
          <p className="team-name">Lucía Peña</p>
          <p className="team-role">Diseño UX & HTML/CSS</p>
        </div>
      </div>

      {/* Values */}
      <p className="section-title" style={{ marginBottom: "0.4rem" }}>Nuestros valores</p>
      <p className="section-sub">Lo que nos guía cada día</p>
      <div className="values-grid">
        <div className="value-card">
          <span className="value-icon">🎓</span>
          <div>
            <p className="value-title">Educación accesible</p>
            <p className="value-desc">Creemos que aprender tecnología debe estar al alcance de todos.</p>
          </div>
        </div>
        <div className="value-card">
          <span className="value-icon">🔬</span>
          <div>
            <p className="value-title">Aprendizaje práctico</p>
            <p className="value-desc">Cero teoría vacía. Cada concepto viene acompañado de un ejercicio real.</p>
          </div>
        </div>
        <div className="value-card">
          <span className="value-icon">🌱</span>
          <div>
            <p className="value-title">Crecimiento continuo</p>
            <p className="value-desc">Actualizamos nuestros contenidos para que siempre estén al día.</p>
          </div>
        </div>
        <div className="value-card">
          <span className="value-icon">💬</span>
          <div>
            <p className="value-title">Comunidad primero</p>
            <p className="value-desc">Aprenderás mejor rodeado de otros estudiantes con los mismos objetivos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;