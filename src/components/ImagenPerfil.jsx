import React from 'react';
import perfil from '../images/perfil.png';

function ImagenPerfil() {
  return (
    <img className='w-38 h-38 rounded-full flex
        mbl:self-center mbl:mb-8
        sml:mr-10 sml:self-center sml:mt-6 sml:ml-8
        ' src={perfil} alt='perfil.jpg' />
  )
}
export default ImagenPerfil;