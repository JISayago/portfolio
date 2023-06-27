import React from 'react'

function Trabajos() {
  return (
    <div className='p-4 mt-6'>
     <h1 className='text-white flex font-mono font-bold text-3xl'>
        Trabajos
      </h1>
    <ul className='list-disc p-4 text-white font-mono text-md w-110'>          
        <li className='m-1 mb-6'><label className='m-1 text-decoration-line: underline font-bold text-base text-dark-orange'>Programador Freelance:</label><label className='text-base'>Programación Freelance. 2023-Actualidad</label></li>
        <li className='m-1 mb-6'><label className='m-1 text-decoration-line: underline font-bold text-base text-dark-orange'>Programador en Censys S.A:</label><label className='text-base'>Programar sistema bancario. Análisis de datos y corrección de problemas del sistema. 2022-2023</label></li>
        <li className='m-1 mb-6'><label className='m-1 text-decoration-line: underline font-bold text-base text-dark-orange'>Profesor particular:</label><label className='text-base'>Preparación de Alumnos en materias de secundario (Física, Físico-Quimica, Matemática, Computación). 2019</label></li>
        <li className='m-1 mb-6'><label className='m-1 text-decoration-line: underline font-bold text-base text-dark-orange'>Reparación de Pc:</label><label className='text-base'>Armado, limpieza y reparación de Pc. 2018-Actualidad</label></li>
    </ul>
    </div>
  )
}

export default Trabajos;