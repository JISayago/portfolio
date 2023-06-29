import React, { useEffect, useState } from 'react';
import data from "../../data.json";
import { Link } from 'react-router-dom';
import { SlCloudDownload } from 'react-icons/sl';
import { SiGooglesheets } from 'react-icons/si';
import { BsBoxArrowUpRight } from 'react-icons/bs';


function DatosBasicos() {
  let fecha1 = new Date('1994/04/15');
  let fecha2 = new Date()
  let resta = fecha2 - fecha1;
  let edad = Math.round(resta / (1000 * 60 * 60 * 24) / 365);
  
  const gitPath = 'https://github.com/JISayago';
  const linkPath = 'https://www.linkedin.com/in/juan-ignacio-sayago-749694191/';
  const cv = 'https://drive.google.com/file/d/1nNveERdx36KU39d7-ceQ3WD_CNCOb3pY/view?usp=sharing';

  const [tecnos, setTecnos] = useState([]);

  useEffect(() => {
    setTecnos(data.tecnologias);
  }, []);

  console.log(tecnos)


  function handleRedirect(e, data) {
    e.preventDefault();
    
    let link = "";
    data === 1 ?
      link = linkPath :
      link = gitPath;      
    window.open(link, '_blank');
  }

  return (
    <div className='p-4 mt-6'>
      <h1 className='text-white flex font-mono font-bold text-3xl'>
        Soy Juan Ignacio Sayago.
      </h1>
      <div className='m-1  text-dark-orange text-bold'>
        <Link className='flex flex-column justify-start mt-3' to={cv} target="_blank" download>
        <label className='m-1.5'><SiGooglesheets /></label>
        Descargar CV
        <label className='m-1.5'><SlCloudDownload /></label>
        </Link>
        </div>
      <ul className='list-disc text-base  p-4 text-white font-mono text-md w-110'>
        <li className='m-1 mb-6 text-dark-orange'><label className='text-smoke font-bold'>Tengo {edad} años y vivo en Yerba Buena, Tucumán, Argentina.</label></li>
        <li className='m-1 mb-6 text-dark-orange'><label className='text-smoke font-bold'>Actualmente me encuentro trabajando de manera freelance.</label></li>
        <li className='m-1 mb-6 text-dark-orange'><label className='text-smoke font-bold'>Estoy formándome en el manejo de React Native, ya que considero que es una tecnología muy práctica y solicitada.</label></li>
        <li className='m-1 mb-6 text-dark-orange'>
        <button className='flex flex-row' onClick={(e) => handleRedirect(e, 1)}>
          <label className='flex text-smoke font-bold hover:text-dark-orange hover:scale-105 hover:underline'>
              Linkedin
              <label className='mx-1 p-1 text-smoke font-bold'><BsBoxArrowUpRight/></label>
            </label>           
          </button>
        </li>
        <li className='m-1 mb-6 text-dark-orange'>
          <button className='flex flex-row' onClick={(e) => handleRedirect(e, 2)}>
            <label className='flex text-smoke font-bold hover:text-dark-orange hover:scale-105 hover:underline'>
              GitHub
            <label className='mx-1 p-1 text-smoke font-bold'><BsBoxArrowUpRight/></label>
            </label>
        </button>
        </li>
        <li className='m-1 mb-6 text-dark-orange'>
          <label className='text-smoke font-bold'>Algunas de las tecnologías que ya utilicé son:</label>
          </li>
        <li className='flex justify-center'>
        <ul className='flex flex-wrap bg-smoke-b rounded-xl text-center p-2
         mbl:flex-col justify-self-center mbl:mt-4 mbl:w-1/2
         sml:flex-row sml:justify-evenly sml:mx-0 sml:w-auto '>
          {tecnos.map(t => 
            <li className="badge mx-1 my-0.5 badge-outline text-dark-blue font-bold text-sm
            mbl:w-full 
            sml:w-auto 
            ">{t.nombre}</li>
          ) }
          </ul>
          </li>
      </ul>
    </div>
  )
}
export default DatosBasicos;
