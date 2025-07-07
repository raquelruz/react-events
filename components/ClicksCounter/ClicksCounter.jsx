import { useState } from "react";
import "./ClicksCounter.css";

export const ClicksCounter = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="clickscounter-container">
			<h1>Contador de Clicks</h1>
			<p>Has hecho click {count} veces</p>

			<button
				className="clickcounter-btn"
				onClick={() => {
                    console.log(count + 1);
					setCount(count + 1);
				}}
			>
				¡Haz click aquí!
			</button>
		</div>
	);
};
