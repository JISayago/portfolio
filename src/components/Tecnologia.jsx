import React from 'react'

function Tecnologia({tecnologia}) {
  return (
    <li className="badge mx-1 my-0.5 badge-outline text-dark-blue font-bold text-sm
    mbl:w-full 
    sml:w-auto 
    ">{tecnologia.nombre}</li>
  )
}

export default Tecnologia