import React from 'react'
import { Link } from 'react-router-dom'

export default function LinksSobreMi({cargarComponente}) {
 
    const classRemoveClick = () => {
        const clicked = document.getElementsByClassName('clicked')[0];
        if (clicked === undefined) { return };
        const link1 = document.getElementsByClassName(clicked.id)[0];
        console.log(link1)
            link1.classList.add('sml:border-transparent');
            link1.classList.remove('clicked');
            link1.classList.remove('sml:border-smoke');
            link1.classList.remove('scale-110');
    } 
  const classAddClick = (n) => {
        const link = document.getElementsByClassName(n)[0];
        link.classList.remove('sml:border-transparent');
        link.classList.add('clicked');
        link.classList.add('sml:border-smoke');
        link.classList.add('sml:border-b-transparent');
        link.classList.add('scale-110');
    }

    const selected = (n) => {
        cargarComponente(n);
        classRemoveClick();
        classAddClick(n);
 }

  return (
    <div className="sml:mt-14 sml:pt-2 sml:px-2 sml:border-b sml:border-smoke">
    <ul className='flex 
          mbl:flex-col mbl:p-6
          sml:flex-row sml:p-0 sml:mx-4 sml:px-2 sml:pt-2 '>
        <li onClick={() => selected(1)} id='1' className='1 clicked scale-110
              mbl:p-2 mbl:border-l mbl:border-l-smoke mbl:mb-4
              sml:mx-2 sml:mb-0 sml:rounded-t-xl sml:border-b-transparent sml:border-smoke sml:border transition ease-in-out hover:border-smoke hover:scale-110 hover:duration-150 hover:border-b-transparent'>
                  <Link className='font-bold text-dark-orange'>Presentación</Link></li>
        <li onClick={() => selected(2)} id='2' className='2 
              mbl:p-2 mbl:border-l mbl:border-l-smoke mbl:mb-4
              sml:mx-2 sml:mb-0 sml:rounded-t-xl sml:border-transparent sml:border transition ease-in-out hover:border-smoke hover:scale-110 hover:duration-150 hover:border-b-transparent'>
                  <Link className='font-bold text-dark-orange'>Datos Básicos</Link></li>
        <li onClick={() => selected(3)} id='3' className='3 
              mbl:p-2 mbl:border-l mbl:border-l-smoke mbl:mb-4
              sml:mx-2 sml:mb-0 sml:rounded-t-xl sml:border-transparent sml:border transition ease-in-out hover:border-smoke hover:scale-110 hover:duration-150 hover:border-b-transparent'>
                  <Link className='font-bold text-dark-orange'>Educación</Link></li>
        <li onClick={() => selected(4)} id='4' className='4 
              mbl:p-2 mbl:border-l mbl:border-l-smoke mbl:mb-4
              sml:mx-2 sml:mb-0 sml:rounded-t-xl sml:border-transparent sml:border transition ease-in-out hover:border-smoke hover:scale-110 hover:duration-150 hover:border-b-transparent'>
                  <Link className='font-bold text-dark-orange'>Trabajos</Link></li>
          </ul>
       </div>
  )

}
