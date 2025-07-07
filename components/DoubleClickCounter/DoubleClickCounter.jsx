import { useState } from "react";
import "./DoubleClickCounter.css";

export const DoubleClickCounter = () => {
	const [account, setAccount] = useState(0);

	return (
		<div className="doubleclick-container">
			<h3>Contador doble click</h3>
			<p>Has hecho click {account} veces</p>

			<button
				className="doubleclick-btn"
				onDoubleClick={() => {
					console.log(account + 1);
					setAccount(account + 1);
				}}
			>
				Haz click aqui
			</button>
		</div>
	);
};
