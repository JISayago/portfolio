import React from 'react';
import { IconContext } from 'react-icons/lib';
import { SiGmail,SiWhatsapp } from "react-icons/si";
import {FaGithub ,FaLinkedin} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
  

function Footer() {
    let navigate = useNavigate();
    
    const handleLinkGithub = () => {
        window.open("https://github.com/JISayago", '_blank');
    }
    const handleLinkLinkedin = () => {
        window.open("https://www.linkedin.com/in/juan-ignacio-sayago-749694191/", '_blank');
    }
    const handleLinkGmail = () => {
        
        navigate("/contacto")
    }
    const handleLinkWhatsapp = () => {
        const n = "+5493814623206";
        const url = `https://wa.me/${n}`;
    window.open(url, '_blank');
    }
    
  return (
      <footer className='flex  
      mbl:p-2 
      sml:p-2 
      pcs:p-8'>
          <div className='flex w-full justify-center'>
              <IconContext.Provider value={{ color: "#f45e00", size:"1.75rem"}}>                  
          <ul className='flex mbl:w-full mbl:flex-col sml:flex-row sml:justify-evenly pcs:w-full pcs:justify-center '>
                  <li className='flex mbl:justify-start sml:justify-center'><button onClick={handleLinkGithub} className='mx-8 w-1/3 flex justify-center pcs:mx-14 transition ease-in-out hover:scale-110 hover:duration-150 w-20 h-20'><FaGithub /></button></li>
                  <li className='flex mbl:justify-end sml:justify-center'><button onClick={handleLinkLinkedin} className='mx-8 w-1/3 flex justify-center pcs:mx-14 transition ease-in-out hover:scale-110 hover:duration-150 w-20 h-20'><FaLinkedin /></button></li>
                  <li className='flex mbl:justify-start sml:justify-center'><button onClick={handleLinkGmail} className='mx-8 w-1/3 flex justify-center pcs:mx-14 transition ease-in-out hover:scale-110 hover:duration-150 w-20 h-20'><SiGmail /></button></li>
                  <li className='flex mbl:justify-end sml:justify-center'><button onClick={handleLinkWhatsapp} className='mx-8 w-1/3 flex justify-center pcs:mx-14 transition ease-in-out hover:scale-110 hover:duration-150 w-20 h-20'><SiWhatsapp /></button></li>
              </ul>
              </IconContext.Provider>
          </div>
    </footer>
  )
}
export default Footer;