import TarjetaTaller from "../components/TarjetaTaller";

function Talleres() {
  return (
    <div>
      <div className="page-header">
        <p className="page-tag">Catálogo 2025</p>
        <h2 className="page-title">Talleres disponibles</h2>
        <p className="page-desc">
          Explora nuestra oferta de formación técnica. Todos los talleres incluyen
          material, soporte y certificado al finalizar.
        </p>
      </div>

      <div className="cards-grid">
        <TarjetaTaller
          nombre="React desde cero"
          duracion="4 semanas"
          nivel="Básico"
          badge="Popular"
          badgeColor="badge-blue"
          descripcion="Aprende a construir interfaces modernas con React, hooks y componentes reutilizables."
        />
        <TarjetaTaller
          nombre="Python para principiantes"
          duracion="6 semanas"
          nivel="Básico"
          badge="Nuevo"
          badgeColor="badge-green"
          descripcion="Desde variables hasta automatización: domina Python con ejercicios prácticos desde el día uno."
        />
        <TarjetaTaller
          nombre="Bases de datos con MySQL"
          duracion="3 semanas"
          nivel="Intermedio"
          badge="Recomendado"
          badgeColor="badge-orange"
          descripcion="Diseña, consulta y optimiza bases de datos relacionales con SQL y MySQL Workbench."
        />
        <TarjetaTaller
          nombre="Diseño con HTML y CSS"
          duracion="4 semanas"
          nivel="Básico"
          badge="Esencial"
          badgeColor="badge-purple"
          descripcion="Construye páginas web atractivas y responsivas usando HTML semántico y CSS moderno."
        />
        <TarjetaTaller
          nombre="JavaScript Básico"
          duracion="5 semanas"
          nivel="Básico"
          badge="Fundamentals"
          badgeColor="badge-orange"
          descripcion="Lógica de programación, manipulación del DOM y eventos para que tu web cobre vida."
        />
        <TarjetaTaller
          nombre="Git y control de versiones"
          duracion="2 semanas"
          nivel="Básico"
          badge="Profesional"
          badgeColor="badge-green"
          descripcion="Gestiona tu código con Git y GitHub como lo hacen los equipos de desarrollo reales."
        />
      </div>
    </div>
  );
}

export default Talleres;