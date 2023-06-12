import React from 'react'
import { Link } from 'react-router-dom';

function Links() {
  return (
    <div className="flex     
    pcs:flex-auto pcs:items-end ">
           <ul className= 'p-2 flex font-mono font-bold text-dark-orange text-xl mbl:flex-col mbl:w-full mbl:text-center pcs:flex-auto pcs:items-end pcs:flex-row pcs:justify-around'>
        <li className='hover:border-b hover:border-b-dark-orange transition ease duration-500
            mbl:p-4 mbl:border-b mbl:border-b-smoke pcs:border-b-transparent'><Link to={'/'}>Sobre Mí</Link></li>
        <li className='hover:border-b hover:border-b-dark-orange transition ease duration-500
            mbl:p-4 mbl:border-b mbl:border-b-smoke pcs:border-b-transparent'><Link to={'/proyectos'}>Proyectos</Link></li>
        <li className='hover:border-b hover:border-b-dark-orange transition ease duration-500
            mbl:p-4 mbl:border-b mbl:border-b-smoke pcs:border-b-transparent'><Link to={'/contacto'}>Contacto</Link></li>
          </ul>
        </div>
  )
}
export default Links;