import '../stylesheets/articulo.css';

export default function Articulo({ artTitle, artSubtitle, img, imgTitle, figcapImg, content, datetime}){
	return(
		<article>
			<header>
				<h2>{ artTitle }</h2>
				<h3>{ artSubtitle }</h3>
			</header>

			<figure>
				<img src={ img } title={ imgTitle } alt={ imgTitle }/>
				<figcaption>{ figcapImg }</figcaption>
			</figure>

			{ content }

			<footer>
				<time dateTime={ datetime }>Publicado: { datetime }</time>
			</footer>
		</article>
	);
}