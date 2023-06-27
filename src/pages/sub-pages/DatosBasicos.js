import React from 'react';
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
  const cv = 'https://drive.google.com/file/d/1q6h4BshxIcngAZxLwGq0Aiuoxq745dmS/view?usp=share_link';

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
        Me llamo Juan Ignacio Sayago.
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
        <li className='m-1 mb-6 text-dark-orange'><label className='text-smoke font-bold'>Y también formándome en el manejo de React Native, ya que considero que es una tecnología muy práctica y solicitada.</label></li>
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
        <li className='m-1 mb-6 text-dark-orange'><label className='text-smoke font-bold'>Algunas de las tecnologías que ya utilicé son: </label></li>
        <ul className='flex bg-smoke-b rounded-xl text-center 
         mbl:flex-col mbl:mx-16 mbl:mt-4 mbl: w-2/3
         sml:flex-row sml:justify-evenly sml:mx-0 sml:w-auto'>
          <li className='m-1 text-dark-blue font-bold text-base'>HTML</li>          
          <li className='m-1 text-dark-blue font-bold text-base'>-</li>
          <li className='m-1 text-dark-blue font-bold text-base'>Js</li>
          <li className='m-1 text-dark-blue font-bold text-base'>-</li>
          <li className='m-1 text-dark-blue font-bold text-base'>Css</li>
          <li className='m-1 text-dark-blue font-bold text-base'>-</li>
          <li className='m-1 text-dark-blue font-bold text-base'>Php</li>
          <li className='m-1 text-dark-blue font-bold text-base'>-</li>
          <li className='m-1 text-dark-blue font-bold text-base'>C#-Windows Forms</li>
          <li className='m-1 text-dark-blue font-bold text-base'>-</li>
          <li className='m-1 text-dark-blue font-bold text-base'>React JS</li>
          <li className='m-1 text-dark-blue font-bold text-base'>-</li>
          <li className='m-1 text-dark-blue font-bold text-base'>Laravel</li>
          <li className='m-1 text-dark-blue font-bold text-base'>-</li>
          <li className='m-1 text-dark-blue font-bold text-base'>Sql, MySql y T-Sql</li>
          <li className='m-1 text-dark-blue font-bold text-base'>-</li>
          <li className='m-1 text-dark-blue font-bold text-base'>Git</li>
          <li className='m-1 text-dark-blue font-bold text-base'>-</li>
          <li className='m-1 text-dark-blue font-bold text-base'>Power Builder</li>
        </ul>
      </ul>
    </div>
  )
}
export default DatosBasicos;
