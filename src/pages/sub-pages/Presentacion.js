import React from 'react';
import perfil from '../../images/moncho.jpg';

function Presentacion() {
  return (
    <div className='flex 
     mbl:flex-col mbl:p-8
     sml:flex-row sml:justify-between'>                
      <img className='w-32 h-32 rounded-full flex
        mbl:self-center mbl:mb-8
        sml:mr-10 sml:self-center sml:mt-6 sml:ml-8
        ' src={perfil} alt='perfil.jpg' />
        <div className='p-2'>
        <h1 className='flex font-mono font-bold text-3xl
             mbl:text-white mbl:text-center
             sml:mb-2'>
              Hola!, soy Juan Ignacio y soy programador.
            </h1>
        <p className='p-5 rounded-xl text-smoke font-mono text-md w-110
        
        mbl:text-justify mbl:mt-3 mbl:bg-smoke-b mbl:text-dark-blue
        sml:text-justify 
        '>
              Mi objetivo como programador es poder dar respuesta a solicitudes variadas, partiendo desde la corrección/modificación hasta desarrollar aplicaciones desde cero, según la necesidad. <br />
              Por este motivo termino no eligiendo ninguna tecnología en particular y busco llegar al mejor resultado posible de acuerdo a lo solicitado, tanto en funcionamiento como en estética.
            </p>
        </div>
    </div>
  )
}
export default Presentacion;