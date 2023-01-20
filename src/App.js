import './App.css';
import BarraLateral from './comps/barra-lateral';
import Cabecera from './comps/cabecera';
import ContenidoPrincipal from './comps/contenido-principal';
import React, { useRef } from 'react';

export default function App() {

	const refBarraLateral = useRef(),
		refBotonDesplegarBarraLateral = useRef(),
		refContenidoPrincipal = useRef(),
		refCabecera = useRef();

  return (
    <div className="App">
        <Cabecera 
        	refCabecera={refCabecera}
        />
        
        <BarraLateral
        	refBarraLateral={refBarraLateral}
        	refBotonDesplegarBarraLateral={refBotonDesplegarBarraLateral}
        	refContenidoPrincipal={refContenidoPrincipal}
        	refCabecera={refCabecera}
        />

        <ContenidoPrincipal 
        	refContenidoPrincipal={refContenidoPrincipal}
        />
    </div>
  );
}