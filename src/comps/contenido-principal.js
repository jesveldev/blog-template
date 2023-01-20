import '../stylesheets/contenido-principal.css';
import BarraDeNavegacion from './barra-de-navegacion';
import Articulo from './articulo';
import artImg from '../imgs/1.jpg';

export default function ContenidoPrincipal({ refContenidoPrincipal }) {

	let content = <>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</>
				;
  return (
		<main ref={ refContenidoPrincipal }className="cont-principal">

			<BarraDeNavegacion/>

			<Articulo
				artTitle='Título del Artículo'
				artSubtitle='Subtítulo del Artículo'
				img={ artImg }
				imgTitle= 'Imagen del Artículo'
				figcapImg= 'Comentario inferior de la imagen'
				content={ content }
				datetime='27-04-2022'
			/>

			<Articulo
				artTitle='Título del Artículo'
				artSubtitle='Subtítulo del Artículo'
				img={ artImg }
				imgTitle= 'Imagen del Artículo'
				figcapImg= 'Comentario inferior de la imagen'
				content={ content }
				datetime='27-04-2022'
			/>

			<Articulo
				artTitle='Título del Artículo'
				artSubtitle='Subtítulo del Artículo'
				img={ artImg }
				imgTitle= 'Imagen del Artículo'
				figcapImg= 'Comentario inferior de la imagen'
				content={ content }
				datetime='27-04-2022'
			/>
		</main>
  );
}