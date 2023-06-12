import React from 'react'

function ProyectoImage({props}) {
    const  imagen  = props;
  return (
    <div class="flex w-1/3 flex-wrap">
    <div class="w-full p-1 md:p-2 bg-smoke-b m-2 border border-dark-orange rounded-lg drop-shadow-2xl">
      <img
        alt="imagenProyect.jpg"
        className="block h-full w-full rounded-lg object-cover object-center"
        src={imagen} />
    </div>
  </div>
  )
}
export default ProyectoImage;