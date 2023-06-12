import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

function Sending() {
    return (
        <div className='h-screen bg-transparent flex justify-center justify-items-center items-center'>            
            <h1 className='text-dark-orange flex font-mono font-bold text-lg mx-5'>
                Enviando el mensaje
        </h1>
            <ThreeDots
        height="80" 
        width="80" 
        radius="9"
        color="#f45e00" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
         />
        </div>
  )
}
export default Sending;