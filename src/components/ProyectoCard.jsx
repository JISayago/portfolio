import React, { useEffect, useState } from 'react'
import { TbArrowBarRight } from "react-icons/tb";
import { useNavigate } from 'react-router-dom'

export default function ProyectoCard({ props  }) {
  const { id, imagen, imagenes, titulo, tecnologias, resumen, servicios, descripcion, repositorio } = props;
  const [res, setRes] = useState("");
  const navigate = useNavigate();
  
  function acortarString(texto) {
    let palabras = texto.split(" ");  // Dividir la cadena en palabras
    let palabrasSeleccionadas = palabras.slice(0, 10);  // Seleccionar las primeras "x" palabras
    let nuevoTexto = palabrasSeleccionadas.join(" ");  // Unir las palabras seleccionadas en una nueva cadena
    
    if (palabras.length > 10) {
      nuevoTexto += "...";  // Agregar "..." al final si hay más palabras en la cadena original
    }
    setRes(nuevoTexto);
  }
  
  useEffect(() => {
    acortarString(resumen);
  },[resumen])

  const handleClick = () => {
    navigate(`/proyecto/${id}`, { state: { id, imagen, imagenes, titulo, tecnologias, resumen,servicios, descripcion, repositorio} });
  }

  
  return (
    <div className="flex static m-10 card w-80 h-1/4 bg-transparent border border-dark-orange drop-shadow-2xl overflow-hidden">
          <img src={imagen} alt="..." className='h-48'/>
    <div className="card-body bg-smoke-b">
      <h2 className="card-title text-smoke text-bold">
       {titulo}
      </h2>
              <p className='text-dark-blue italic text-sm h-16 '>{res}</p>
        <div className=" h-12 card-actions justify-center">
          {tecnologias.map(tecno =>  <div className="badge badge-outline text-dark-blue font-bold text-xs">{tecno}</div>)}       
        </div>      
      </div>
      <button onClick={handleClick}
        className='flex flex-row p-1 bg-dark-orange justify-between justify-end align-center'>
        <label className='p-1 font-bold text-dark-blue'>Ver más</label>
        <label className='p-2 font-bold text-dark-blue'><TbArrowBarRight/></label>
        </button>
  </div>
  )
}
