import { useState } from "react";

function Inscripcion() {
  const [datos, setDatos] = useState({ nombre: "", correo: "", taller: "" });
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [contador, setContador] = useState(0);
  const [enviado, setEnviado] = useState(false);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
    setError("");
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!datos.nombre || !datos.correo || !datos.taller) {
      setError("Por favor completa todos los campos antes de continuar.");
      setMensaje("");
      return;
    }
    setMensaje(`¡Inscripción exitosa! ${datos.nombre} quedó registrado en "${datos.taller}". Te enviaremos más información a ${datos.correo}.`);
    setError("");
    setEnviado(true);
  };

  const reiniciar = () => {
    setDatos({ nombre: "", correo: "", taller: "" });
    setMensaje("");
    setError("");
    setEnviado(false);
  };

  return (
    <div>
      <div className="page-header">
        <p className="page-tag">Únete ahora</p>
        <h2 className="page-title">Formulario de inscripción</h2>
        <p className="page-desc">
          Completa tus datos y elige el taller que más te interese. Es rápido y gratuito.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start" }}>
        {/* Form */}
        <div className="form-card">
          <div className="form-header">
            <p className="form-title">Datos de registro</p>
            <p className="form-subtitle">Todos los campos son obligatorios</p>
          </div>

          {!enviado ? (
            <form onSubmit={manejarEnvio}>
              <div className="form-group">
                <label className="form-label">Nombre completo</label>
                <input
                  className="form-input"
                  type="text"
                  name="nombre"
                  placeholder="Ej: Sarai Pando Basauri"
                  value={datos.nombre}
                  onChange={manejarCambio}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Correo electrónico</label>
                <input
                  className="form-input"
                  type="email"
                  name="correo"
                  placeholder="Ej: sarai@correo.com"
                  value={datos.correo}
                  onChange={manejarCambio}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Taller de interés</label>
                <select
                  className="form-select"
                  name="taller"
                  value={datos.taller}
                  onChange={manejarCambio}
                >
                  <option value="">Selecciona un taller</option>
                  <option value="React desde cero">React desde cero — 4 semanas</option>
                  <option value="Python para principiantes">Python para principiantes — 6 semanas</option>
                  <option value="MySQL básico">Bases de datos con MySQL — 3 semanas</option>
                  <option value="Diseño con HTML y CSS">Diseño con HTML y CSS — 4 semanas</option>
                  <option value="JavaScript Básico">JavaScript Básico — 5 semanas</option>
                  <option value="Git y control de versiones">Git y control de versiones — 2 semanas</option>
                </select>
              </div>

              {error && <div className="alert alert-error">⚠ {error}</div>}

              <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "0.75rem", justifyContent: "center" }}>
                Registrar inscripción →
              </button>
            </form>
          ) : (
            <div>
              <div className="alert alert-success">✓ {mensaje}</div>
              <button onClick={reiniciar} className="btn btn-ghost" style={{ marginTop: "1rem", width: "100%", justifyContent: "center" }}>
                Nueva inscripción
              </button>
            </div>
          )}
        </div>

        {/* Counter */}
        <div style={{ minWidth: "200px" }}>
          <div className="counter-box">
            <span className="counter-number">{contador}</span>
            <p className="counter-label">personas interesadas</p>
            <button className="counter-btn" onClick={() => setContador(c => c + 1)}>
              👍 Me interesa
            </button>
          </div>
          <p style={{ fontSize: "12px", color: "var(--muted)", textAlign: "center", marginTop: "10px" }}>
            Haz clic para mostrar tu interés
          </p>
        </div>
      </div>
    </div>
  );
}

export default Inscripcion;