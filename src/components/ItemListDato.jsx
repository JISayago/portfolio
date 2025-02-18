import React from 'react'
import ButtonRedirect from './ButtonRedirect'

function ItemListDato({text,isButton,handleRedirect,number}) {
    return (
        isButton ?
        <li className='m-1 mb-6 text-dark-orange'><label className='text-smoke font-bold'>
        <ButtonRedirect handleRedirect={handleRedirect} text={text} number={number} />
            </label>
            </li>
            :
      <li className='m-1 mb-6 text-dark-orange'><label className='text-smoke font-bold'>{text }</label></li>
  )
}

export default ItemListDato