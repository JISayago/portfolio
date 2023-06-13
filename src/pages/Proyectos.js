import React, { useState } from 'react';
import Filter from '../components/Filter';
import Error404 from '../components/Error404';
import PaginatedItems from '../components/Paginate';


export default function Proyectos({props}) {
  
  const [buscar, setBuscar] = useState([])
  let proyectList = props;

  let mensaje = "No se encontraron proyectos con tecnología solicitada";
  const handleChange = (e) => {
    e.preventDefault();
    setBuscar(e.target.value);
}

  if (buscar.length !== 0) {
   proyectList =  props.filter(
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
                   <PaginatedItems proyectList={proyectList} itemsPerPage={2}/>
                        :
                        <Error404 props={mensaje}/>
        }
      
    </>
  )
}
