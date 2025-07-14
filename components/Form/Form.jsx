import { useState } from "react";
import "./Form.css";

export const Form = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Formulario enviado");
		alert("¡Formulario enviado!");
	};

	return (
		<form className="simple-form" onSubmit={handleSubmit}>
			<input type="text" placeholder="Tu nombre" />
			<button type="submit">Enviar</button>
		</form>
	);
};
