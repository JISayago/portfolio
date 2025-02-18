import { useEffect,useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Proyectos from "./pages/Proyectos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Proyecto from "./pages/sub-pages/Proyecto";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route index path="/" element={<Inicio />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="proyectos" element={<Proyectos />} />
            <Route path="proyecto/:id" element={<Proyecto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
