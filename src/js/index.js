//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let second = 0;
setInterval(function () {
	const mil = Math.floor(second / 1000);
	const cent = Math.floor(second / 100);
	const dec = Math.floor(second / 10);
	const und = Math.floor(second / 1);
	second++;
	ReactDOM.render(
		<Home uno={und} dos={dec} tres={cent} cuatro={mil} />,
		document.querySelector("#app")
	);
}, 1000);