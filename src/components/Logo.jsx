import React from 'react';
import image from "../images/LogoJIS.png";

function Logo() {
    return (
      <div className="flex p-2 animate-pulse
        mbl:justify-start 
        pcs:flex-auto pcs:flex-row pcs:items-center pcs:justify-start">
        <img src={image} alt="img-logo.png" className="w-32 h-32 ml-12" />  
        </div>
  )
}
export default Logo;