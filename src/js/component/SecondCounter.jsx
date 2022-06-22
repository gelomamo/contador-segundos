import React from "react";

function SecondCounter(props) {
	console.log(props);
	return (
		<>
			<h1>Second Counter</h1>
			<div className="contenedor">
				<div className="numero">{props.cuatro % 10}</div>
				<div className="numero">{props.tres % 10}</div>
				<div className="numero">{props.dos % 10}</div>
				<div className="numero">{props.uno % 10}</div>
			</div>
		</>
	);
}

export default SecondCounter;