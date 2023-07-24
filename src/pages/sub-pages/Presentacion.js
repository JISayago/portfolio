import React from 'react';
import ImagenPerfil from '../../components/ImagenPerfil';

function Presentacion() {
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
          Mi principal aspiración es dar solución a las necesidades del cliente incluyendo modificaciones y/o cambios de aplicaciones existentes, tanto como diseño y desarollo de nuevas aplicaciones.<br/>
          Para concretar tales objetivos adapto la tecnología a cada pedido para encontrar la mejor solución posible.
        </p>
        </div>
    </div>
  )
}
export default Presentacion;