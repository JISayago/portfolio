import React from 'react';
import ImagenPerfil from '../../components/ImagenPerfil';

function Presentacion() {
  const texto = "Tengo experiencia en desarrollo y mantenimiento de sistemas, gestión de bases de datos y soporte técnico. A lo largo de mi trayectoria, he trabajado en distintos sectores de IT, lo que me ha permitido desarrollar una sólida capacidad para resolver problemas y optimizar procesos, siempre priorizando soluciones funcionales y eficientes. Mi objetivo es brindar soluciones que se adapten a las necesidades del cliente, ya sea mediante la mejora y modificación de aplicaciones existentes o el diseño y desarrollo de nuevas."
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