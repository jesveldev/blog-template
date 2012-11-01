import '../stylesheets/barra-lateral.css';

function Boton({ children }){
	return (
		<button title='Botón de la barra lateral'>Opción #{ children }</button>
	);
}

export default function BarraLateral(){
	return (
		<aside className="barra-lateral" title="Barra lateral">
			<ul className="contenedor-ebl">
				<Boton>1</Boton>
				<Boton>2</Boton>
				<Boton>3</Boton>
				<Boton>4</Boton>
				<Boton>5</Boton>
				<Boton>6</Boton>
				<Boton>7</Boton>
				<Boton>8</Boton>
				<Boton>9</Boton>
			</ul>
		</aside>
	);
}
