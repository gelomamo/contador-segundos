import React from "react";
import SecondCounter from "./SecondCounter.jsx";

//create your first component
const Home = (props) => {
	return (
		<>
			<SecondCounter
				uno={props.uno}
				dos={props.dos}
				tres={props.tres}
				cuatro={props.cuatro}></SecondCounter>
		</>
	);
};

export default Home;

