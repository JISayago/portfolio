import React, { useEffect, useState } from 'react';
import Filter from '../components/Filter';
import Error404 from '../components/Error404';
import PaginatedItems from '../components/Paginate';
import data from "../data.json";

export default function Proyectos() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    // Ordenar los proyectos por fecha antes de setear el estado
    const sortedProjects = data.proyectos.sort((a, b) => {
      if (a.id === 5 ) {
        a.fecha = "01/2000" 
      }
      if (b.id === 5) {
        b.fecha = "01/2000" 
      }
      
      const [monthA, yearA] = a.fecha.split("/").map(Number);
      const [monthB, yearB] = b.fecha.split("/").map(Number);

      return yearB - yearA || monthB - monthA; // Ordenar primero por año y luego por mes
    });

    setProyectos(sortedProjects);
  }, []);

  const [buscar, setBuscar] = useState("");
  let proyectList = proyectos;

  let mensaje = "No se encontraron proyectos con tecnología solicitada";
  
  const handleChange = (e) => {
    e.preventDefault();
    setBuscar(e.target.value);
  };

  if (buscar.length !== 0) {
    proyectList = proyectos.filter(p => 
      p.tecnologias.toString().toLowerCase().includes(buscar.toLowerCase())
    );
    mensaje = `No se encontraron proyectos con la tecnología "${buscar}"`;
  }

  return (
    <>
      <Filter handleChange={handleChange} />
      {
        proyectList.length > 0 
          ? <PaginatedItems buscar={buscar} proyectList={proyectList} itemsPerPage={3} />
          : <Error404 props={mensaje} />
      }
    </>
  );
}
