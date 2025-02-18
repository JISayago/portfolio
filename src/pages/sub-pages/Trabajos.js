import React, { useEffect, useState } from 'react'
import ItemLugarDetalle from '../../components/ItemLugarDetalle';
import TituloSeccion from '../../components/TituloSeccion';
import data from '../../historial.json'

function Trabajos() {
  const [trabajos, setTrabajos] = useState([])
  useEffect(() => {
    setTrabajos(data.trabajos)
  },[])
  return (
    <div className='p-4 mt-6'>
      <TituloSeccion titulo={"Historial Laboral"}/>
      <ul className='list-disc p-4 text-white font-mono text-md w-110'> 
        {
          trabajos.map(t => 
        <ItemLugarDetalle titulo={t.titulo} detalle={t.detalle}/>    
          )
      }  
      </ul>
      </div>
  )
}

export default Trabajos;