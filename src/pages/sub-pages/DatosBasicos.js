import React, { useEffect, useState } from 'react';
import data from "../../data.json";
import { Link } from 'react-router-dom';
import { SlCloudDownload } from 'react-icons/sl';
import { SiGooglesheets } from 'react-icons/si';
import ItemListDato from '../../components/ItemListDato';
import TecnologiasUsadas from '../../components/TecnologiasUsadas';


function DatosBasicos() {
  let fecha1 = new Date('1994/04/15');
  let fecha2 = new Date()
  let resta = fecha2 - fecha1;
  let edad = Math.floor(resta / (1000 * 60 * 60 * 24) / 365.25);
  
  const gitPath = 'https://github.com/JISayago';
  const linkPath = 'https://www.linkedin.com/in/juan-ignacio-sayago-749694191/';
  const cv = 'https://drive.google.com/file/d/1akbmwcdpZSbmWDzdwNeTxYY69f9VyUk5/view?usp=sharing';
  
  const [tecnos, setTecnos] = useState([]);
  
  useEffect(() => {
    setTecnos(data.tecnologias);
  }, []);
  
  
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
    <ItemListDato isButton={false} text={`Tengo ${edad} años y vivo en Yerba Buena, Tucumán, Argentina.`} />
    <ItemListDato isButton={false} text={`Actualmente trabajo como programador freelance, desarrollando y manteniendo aplicaciones web.`} />
    <ItemListDato isButton={false} text={`Tengo experiencia en desarrollo fullstack, aunque tengo preferencia por el backend, ya que es el área que más me apasiona. A lo largo de varios proyectos, también me encargué del frontend con React, lo que me permitió desarrollar un conocimiento sólido en ambas áreas.`} />
    <ItemListDato isButton={true} handleRedirect={handleRedirect} number={1} text={"LinkedIn"} />
    <ItemListDato isButton={true} handleRedirect={handleRedirect} number={2} text={"GitHub"} />
    <ItemListDato isButton={false} text={`Algunas de las tecnologías que utilizé son:`} />
    <TecnologiasUsadas tecnos={tecnos} />
    </ul>
    </div>
  )
}
export default DatosBasicos;
