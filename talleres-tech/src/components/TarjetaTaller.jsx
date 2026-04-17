function TarjetaTaller({ nombre, duracion, descripcion, nivel, badge, badgeColor }) {
  return (
    <div className="taller-card">
      <span className={`card-badge ${badgeColor || "badge-blue"}`}>
        {badge || nivel || "Disponible"}
      </span>
      <h4 className="card-title">{nombre}</h4>
      <p className="card-desc">
        {descripcion || "Aprende las bases de esta tecnología con ejercicios prácticos y proyectos reales."}
      </p>
      <div className="card-meta">
        <span>🕐 {duracion}</span>
        <span>📖 {nivel || "Básico"}</span>
      </div>
    </div>
  );
}

export default TarjetaTaller;