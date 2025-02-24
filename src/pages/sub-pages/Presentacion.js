import React from 'react';
import ImagenPerfil from '../../components/ImagenPerfil';

function Presentacion() {
  const texto = "Soy profesional en el área de desarrollo y cuento con experiencia en distintos sectores de IT. A lo largo de mi trayectoria, he desarrollado habilidades en resolución de problemas, priorizando siempre soluciones funcionales. Mi objetivo es formar parte de un equipo donde pueda contribuir con mis conocimientos y seguir adquiriendo nuevas experiencias para continuar creciendo profesionalmente."
  return (
    <div className='flex 
     mbl:flex-col mbl:mt-5 mbl:p-8      
     sml:flex-row sml:mt-11 sml:justify-between
     pcs:items-center'
    >                
      <ImagenPerfil/>
        <div className='p-2'>
        <h1 className='flex font-mono font-bold text-3xl
             mbl:text-white mbl:text-center mbl:mb-2
             sml:mb-2'>
              Hola!, mi nombre Juan Ignacio y soy programador.
            </h1>
        <p className='p-5 rounded-xl text-smoke font-mono text-md w-110        
        mbl:text-start mbl:mt-3 mbl:bg-smoke-b mbl:text-dark-blue
        sml:text-justify  
        '>
          {texto}
        </p>
        </div>
    </div>
  )
}
export default Presentacion;