import React from 'react';
import perfil from '../../images/moncho.jpg';

function Presentacion() {
  return (
    <div className='flex mt-11
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
          Mi objetivo principal es poder dar solución a las necesidades del cliente, partiendo desde modificaciones/cambios de aplicaciones existentes, hasta el  diseño y desarrollo de aplicaciones desde cero.
          Por lo que no elijo ninguna tecnología en específico, sino que me adapto para encontar la solución más óptima para cada pedido.
          Actualmente estoy trabajando en condición de freelance.
        </p>
        </div>
    </div>
  )
}
export default Presentacion;