
export default function Boton({ children, refs, ownClass, title, ownFunc, style }){
	return (
		<button
			ref={refs}
			title={ title }
			className={ ownClass }
			onClick={ ownFunc }
		>{ children }</button>
	);
}