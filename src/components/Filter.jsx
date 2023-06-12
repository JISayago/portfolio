import React from 'react'
import {BsSearch} from 'react-icons/bs'

export default function Filter({ handleChange }) {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
      <form onSubmit={handleSubmit} onChange={handleChange} className='flex flex-row 
      mbl:p-6
      sml:p-4 sml:mt-18 sml:mx-8'>
          <input name='buscador'
              className='flex input border-transparent border-b-dark-orange bg-transparent text-dark-orange placeholder:text-smoke-b focus:bg-transparent focus:border-b-dark-orange'
              type="text"
              placeholder='react...' />
          <label className='p-5 text-dark-orange text-bold'><BsSearch/></label>
      </form> 
      
  )
}
