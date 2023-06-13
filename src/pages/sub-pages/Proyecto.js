import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import ProyectoImage from '../../components/ProyectoImage';
import Carrousel from '../../components/Carrousel';

function Proyecto() {

  const location = useLocation();
  const { id, imagen,imagenes, titulo, tecnologias, servicios, descripcion, repositorio  } = location.state;

  function handleRedirect(e) {
   e.preventDefault();
   window.open(repositorio, '_blank');
  }

     return (
         <div className='p-4 mt-5'>
         <div>
           <div className='p-2'>
                <h1 className=' text-white flex font-mono font-bold text-2xl'>{titulo}</h1>
                <button className='flex flex-row text-base text-dark-orange font-bold' onClick={handleRedirect}>Repositorio del proyecto <label className='mx-1.5 p-1'><BsBoxArrowUpRight/></label></button>             
           </div>
           <div className='p-2 content-center'>
             <p className='p-2 text-smoke font-mono text-md w-110'>
             {descripcion}
             </p>
           </div>
           <h2 className='text-dark-orange flex font-mono font-bold text-lg underline' >Servicios que brinda el software:</h2>
           <ul className='list-disc text-base  p-4 text-white font-mono text-md w-110'>
             {servicios.map(s => <li className='m-1 text-dark-orange'><label className='text-smoke'>{s}</label></li>)}
           </ul>
             </div>
         <div class="
         mbl:hidden
         sml:flex sml:container  sml:mx-auto sml:px-5 sml:py-2 sml:px-32 sml:pt-12">
           <div class="m-1 flex w-full flex-wrap md:-m-2 justify-center ">
             {imagenes.map(imagen => <ProyectoImage props={imagen} />)}
           </div>          
         </div>
         <div className='sml:hidden'>
         <Carrousel props={imagenes } />
         </div>
       </div>

  )
         
}
export default Proyecto;
          