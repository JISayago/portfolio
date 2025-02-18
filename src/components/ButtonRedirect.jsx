import React from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs';

function ButtonRedirect({handleRedirect,text,number}) {
  return (
    <button className='flex flex-row' onClick={(e) => handleRedirect(e, number)}>
            <label className='flex text-smoke font-bold hover:text-dark-orange hover:scale-105 hover:underline'>
                {text}
                <label className='mx-1 p-1 text-smoke font-bold'><BsBoxArrowUpRight/></label>
              </label>           
            </button>
  )
}

export default ButtonRedirect