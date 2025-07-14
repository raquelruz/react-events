import { useState } from "react";
import "./KeyCounter.css";

export const KeyCounter = () => {
	const [keyCode, setKeyCode] = useState("");
	const [count, setCount] = useState(0);

	const handleKeyDown = (event) => {
		setKeyCode(event.code);
		setCount((prev) => prev + 1);
	};

	return (
		<div className="key-counter-container">
			<input type="text" onKeyDown={handleKeyDown} placeholder="Escribe algo..." className="key-input" />
			<div className="key-info">
				<p>
					<strong>Última tecla:</strong> {keyCode || "Ninguna"}
				</p>
				<p>
					<strong>Teclas presionadas:</strong> {count}
				</p>
			</div>
		</div>
	);
};
