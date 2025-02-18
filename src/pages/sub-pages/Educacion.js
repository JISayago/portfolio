import React, { useEffect, useState } from 'react'
import ItemLugarDetalle from '../../components/ItemLugarDetalle';
import TituloSeccion from '../../components/TituloSeccion';
import data from '../../historial.json'

function Educacion() {
  const [educacion, setEducacion] = useState([])
  useEffect(() => {
    setEducacion(data.educacion)
  },[])

  return (
    <div className='p-4 mt-6'>
      <TituloSeccion titulo={"Formación/Educación"}/>
      <ul className='list-disc p-4 text-white font-mono text-md w-110'>     
        {
          educacion.map(e => 
        <ItemLugarDetalle titulo={e.titulo} detalle={e.detalle}/>    
          )
        }
      </ul>
        </div>
  )
}
export default Educacion;