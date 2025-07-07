import { useState } from "react";
import "./ToggleText.css";

export const ToggleText = () => {
	const [visible, setVisible] = useState(false);

	const toggleText = () => {
		setVisible(!visible);
	};

	return (
		<div className="toggle-container">
			<button onClick={toggleText}>{visible ? "Ocultar texto" : "Mostrar texto"}</button>

			{visible && <p className="text">Este es el texto que puedes mostrar u ocultar.</p>}
		</div>
	);
};
