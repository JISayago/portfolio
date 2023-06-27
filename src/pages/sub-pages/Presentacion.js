import React from 'react';
import perfil from '../../images/moncho.jpg';

function Presentacion() {
  return (
    <div className='flex 
     mbl:flex-col mbl:mt-5 mbl:p-8      
     sml:flex-row sml:mt-11 sml:justify-between'>                
      <img className='w-32 h-32 rounded-full flex
        mbl:self-center mbl:mb-8
        sml:mr-10 sml:self-center sml:mt-6 sml:ml-8
        ' src={perfil} alt='perfil.jpg' />
        <div className='p-2'>
        <h1 className='flex font-mono font-bold text-3xl
             mbl:text-white mbl:text-center
             sml:mb-2'>
              Hola!, mi nombre Juan Ignacio y soy programador.
            </h1>
        <p className='p-5 rounded-xl text-smoke font-mono text-md w-110        
        mbl:text-start mbl:mt-3 mbl:bg-smoke-b mbl:text-dark-blue
        sml:text-justify 
        '>
          Mi principal aspiración es dar solución a las necesidades del cliente incluyendo modificaciones y/o cambios de aplicaciones existentes, tanto como diseño y desarollo de nuevas aplicaciones.<br/>
          Para concretar tales objetivos me adapto a la tecnología necesaria para encontarr la mejopr solución a cada pedido en particular.
        </p>
        </div>
    </div>
  )
}
export default Presentacion;