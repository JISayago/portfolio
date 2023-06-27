import { React, useState }  from 'react';
import LinksSobreMi from '../components/LinksSobreMi';
import DatosBasicos from './sub-pages/DatosBasicos';
import Educacion from './sub-pages/Educacion';
import Trabajos from './sub-pages/Trabajos';
import Presentacion from './sub-pages/Presentacion';


export default function Inicio() {

    const [opcion, setoption] = useState(1);
    
    const cargarComponente = (link) => {
        setoption(link)
    }
    const componente = (n) => {
        let compo = null;
        if(opcion === 1) {compo = <Presentacion /> }
        if(opcion === 2) {compo = <DatosBasicos /> }
        if(opcion === 3) {compo = <Educacion /> }
        if(opcion === 4) {compo = <Trabajos /> }
        return compo;
    }
    
    return (            
        <div className='
        mbl:g-full
        sml:h-screen'>   
            <LinksSobreMi cargarComponente={cargarComponente} />
            <div id='content'>
             {componente(opcion)}

            </div>
        </div>
  )
}
