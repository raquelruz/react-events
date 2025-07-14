import { useState } from "react";
import "./FocusInput.css";

export const FocusInput = () => {
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => {
		setIsFocused(true);
		console.log("El input está enfocado");
	};

	const handleBlur = () => {
		setIsFocused(false);
		console.log("El input perdió el foco");
	};

	return (
		<div className="focus-input-container">
			<input
				type="text"
				className={`focus-input ${isFocused ? "focused" : ""}`}
				placeholder="Escribe algo..."
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
			<p className="focus-status">{isFocused ? "🟢 Input enfocado" : "⚪ Input no enfocado"}</p>
		</div>
	);
};
