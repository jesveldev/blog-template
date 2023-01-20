import '../stylesheets/barra-de-navegacion.css';
import Boton from './boton';

export default function BarraDeNavegacion() {
  return (
  	<nav className="navbar">
		<ul>
			<Boton title='Opción'>OPCION 1</Boton>
			<Boton title='Opción'>OPCION 2</Boton>
			<Boton title='Opción'>OPCION 3</Boton>
			<Boton title='Opción'>OPCION 4</Boton>
			<Boton title='Opción'>OPCION 5</Boton>
		</ul>
	</nav>
  );
}