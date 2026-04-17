import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./pages/Inicio";
import Talleres from "./pages/Talleres";
import Nosotros from "./pages/Nosotros";
import Inscripcion from "./pages/Inscripcion";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Menu />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/talleres" element={<Talleres />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/inscripcion" element={<Inscripcion />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2025 TallerTech — Aprendizaje tecnológico para todos</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;