import React from 'react'

function Educacion() {
  return (
    <div className='p-4 mt-6'>
     <h1 className='text-white flex font-mono font-bold text-3xl'>
        Educación
      </h1>  
        <ul className='list-disc p-4 text-white font-mono text-md w-110'>          
        <li className='m-1 mb-6'><label className='m-1 text-decoration-line: underline font-bold text-base text-dark-orange'>Tecnicatura Universitaria en Programación:</label><label className='text-base'>Universidad Tecnológica Nacional (UTN-FRT), periodo 2018-2021. -Finalizado-.</label></li>
        <li className='m-1 mb-6'><label className='m-1 text-decoration-line: underline font-bold text-base text-dark-orange'>Curso dictado por Digital House:</label><label className='text-base'>Programación Fullstack (HTML, Javascript, Css, Laravel y MySql), periodo 2019-2020. -Finalizado-.</label></li>
        <li className='m-1 mb-6'><label className='m-1 text-decoration-line: underline font-bold text-base text-dark-orange'>Curso en INI Computación:</label><label className='text-base'>Reparación de Pc y Redes, periodo 2017-2018. -Finalizado-.</label></li>
        <li className='m-1 mb-6'><label className='m-1 text-decoration-line: underline font-bold text-base text-dark-orange'>Psicología:</label><label className='text-base'>Facultad de Psicología UNT, periodo 2012-2017. -Sin Finalizar-. </label></li>
        <li className='m-1 mb-6'><label className='m-1 text-decoration-line: underline font-bold text-base text-dark-orange'>Secundario Completo:</label><label className='text-base'>Colegio Parroquial El Salvador, finalizado en el año 2011.</label></li>
        </ul>
        </div>
  )
}
export default Educacion;