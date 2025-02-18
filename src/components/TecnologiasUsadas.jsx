import React from 'react'
import Tecnologia from './Tecnologia'

function TecnologiasUsadas({tecnos}) {
  return (
    <li className='flex justify-center'>
    <ul className='flex flex-wrap bg-smoke-b rounded-xl text-center p-2
     mbl:flex-col justify-self-center mbl:mt-4 mbl:w-1/2
     sml:flex-row sml:justify-evenly sml:mx-0 sml:w-auto '>
      {tecnos.map(t => 
          <Tecnologia tecnologia = {t} />
      ) }
      </ul>
      </li>
  )
}

export default TecnologiasUsadas