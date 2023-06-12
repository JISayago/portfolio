import React from 'react'
import { MagnifyingGlass } from 'react-loader-spinner';

export default function Error404({ props }) {
    const  mensaje = props;
  return (
    <div className='h-screen bg-transparent flex justify-center justify-items-center items-center'>            
    <h1 className='text-dark-orange flex font-mono font-bold text-lg mx-5'>
              { mensaje}
</h1>
<MagnifyingGlass
  visible={true}
  height="80"
  width="80"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#f45e00'
/>
</div>
  )
}
