import '../stylesheets/barra-lateral.css';
import Boton from './boton.js';

export default function BarraLateral({
										refBarraLateral,
										refBotonDesplegarBarraLateral,
										refCabecera,
										refContenidoPrincipal
									}){

	function openAside(){
		if(refBotonDesplegarBarraLateral.current.textContent==='➜'){

			refBarraLateral.current.style.animation = 'adbl-barra-1 0.2s ease-in-out forwards';
			refCabecera.current.style.animation = 'adbl-header-1 0.2s ease-in-out forwards';
			refContenidoPrincipal.current.style.animation = 'adbl-main-1 0.2s ease-in-out forwards';

			refBotonDesplegarBarraLateral.current.style.animation = 'adbl-boton-1 0.2s ease-in-out forwards';
			refBotonDesplegarBarraLateral.current.textContent = '✖';

		}else{

			refBarraLateral.current.style.animation = 'adbl-barra-2 0.2s ease-in-out forwards';
			refCabecera.current.style.animation = 'adbl-header-2 0.2s ease-in-out forwards';
			refContenidoPrincipal.current.style.animation = 'adbl-main-2 0.2s ease-in-out forwards';

			refBotonDesplegarBarraLateral.current.style.animation = 'adbl-boton-2 0.2s ease-in-out forwards';
			refBotonDesplegarBarraLateral.current.textContent = '➜';

		}
	}

	function anexarBotones(num){
		let botones = [];

		for(let i = 0; i<num; i++){
			botones.push(i+1);
		}

		return botones;
	}

	return (
		<>
			<aside ref={ refBarraLateral } className="barra-lateral" title="Barra lateral">
				<ul className="contenedor-ebl">
					{
						anexarBotones(9)
						.map(e=><Boton key={e} title='Boton de la barra lateral'>Opción #{e}</Boton>)
					}
				</ul>
			</aside>

			<Boton
				ownClass='desplegar-lista'
				refs = {refBotonDesplegarBarraLateral}
				ownFunc={openAside}
			>➜</Boton>
		</>
	);
}
