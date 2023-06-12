import { useEffect,useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Proyectos from "./pages/Proyectos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Proyecto from "./pages/sub-pages/Proyecto";
import data from "./data.json";

function App() {

  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    setProyectos(data.proyectos);
  }, []);

  return ( 
   
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Inicio />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="proyectos" element={<Proyectos props={proyectos} />} />
          <Route path="proyecto/:id" element={<Proyecto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
