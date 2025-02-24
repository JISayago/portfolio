import React from 'react';
import image from "../images/LogoJIS.png";
import { useNavigate } from 'react-router-dom';

function Logo() {
  const navigate = useNavigate()
  const handleClick = () => {
     navigate('/')
  } 
    return (
      <button onClick={handleClick} className="flex  animate-pulse
        mbl:justify-start mbl:p-0
        pcs:p-2 pcs:flex-auto pcs:flex-row pcs:items-center pcs:justify-start">
        <img src={image} alt="img-logo.png" className="
        mbl:w-12 mbl:h-12 mbl:ml-6
        sml:w-32 sml:h-32 sml:ml-12
        " />  
        </button>
  )
}
export default Logo;