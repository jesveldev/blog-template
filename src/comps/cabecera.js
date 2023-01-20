import '../stylesheets/cabecera.css';

export default function Cabecera({ refCabecera }){
	return (
		<header ref={ refCabecera }className="cabecera">
			<div className="banner">
				<div className="p-1">
					<div className="palabra-1">
						<span className="l-1">P</span>
						<span className="l-2">o</span>
						<span className="l-3">r</span>
						<span className="l-4">t</span>
						<span className="l-5">a</span>
						<span className="l-6">l</span>		
					</div>
						<div className="palabra-2">
						<span className="l-7">d</span>
						<span className="l-8">e</span>							
					</div>

					<div className="palabra-3">
						<span className="l-9">A</span>
						<span className="l-10">p</span>
						<span className="l-11">r</span>
						<span className="l-12">e</span>
						<span className="l-13">n</span>
						<span className="l-14">d</span>
						<span className="l-15">i</span>
						<span className="l-16">z</span>
						<span className="l-17">a</span>
						<span className="l-18">j</span>
						<span className="l-19">e</span>				
					</div>
				</div>

				<div className="p-2">
					<span className="l-20">W-</span>
					<span className="l-21">E-</span>
					<span className="l-22">B</span>
				</div>
			</div>
		</header>
	);
}