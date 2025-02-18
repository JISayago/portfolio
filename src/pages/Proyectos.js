import React, { useEffect, useState } from 'react';
import Filter from '../components/Filter';
import Error404 from '../components/Error404';
import PaginatedItems from '../components/Paginate';
import data from "../data.json";


export default function Proyectos() {
  const [proyectos, setProyectos] = useState([]);
  useEffect(() => {
    setProyectos(data.proyectos);
  }, []);
  
  const [buscar, setBuscar] = useState([])
  let proyectList = proyectos;

  let mensaje = "No se encontraron proyectos con tecnología solicitada";
  const handleChange = (e) => {
    e.preventDefault();
    setBuscar(e.target.value);
}

  if (buscar.length !== 0) {
   proyectList =  proyectos.filter(
        p => p.tecnologias
            .toString()
            .toLowerCase()
       .includes(buscar.toLowerCase()));
    
        mensaje = `No se encontraron proyectos con la tecnología "${buscar}"`;
  }
  return (
    <>
      <Filter handleChange={ handleChange} />
        {
          proyectList.length > 0 
                        ?
          <PaginatedItems buscar={buscar } proyectList={proyectList} itemsPerPage={3}/>
                        :
                        <Error404 props={mensaje}/>
        }
      
    </>
  )
}
