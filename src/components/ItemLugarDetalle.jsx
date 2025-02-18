import React from 'react'

function ItemLugarDetalle({titulo,detalle }) {
  return (
      <li className='m-1 mb-6'>
          <label className='m-1 text-decoration-line: underline font-bold text-base text-dark-orange'>{`${titulo}:`}</label>
          <label className='text-base'>{detalle}</label>
      </li>
  )
}

export default ItemLugarDetalle