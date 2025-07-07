import { useState } from "react";
import './LoginForm.css'

export const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (event) => {
		event.preventDefault();

	};

	return (
		<div class="login-container">
            <h2>¡Bienvenido {email}!</h2>

            <form onSubmit={handleLogin}>
			<input type="email" 
            placeholder="Introduce tu email"
            value={email}
            onChange={event => setEmail(event.target.value)}/>

            <input type="password"
            placeholder="Introduce tu contraseña"
            value={password}
            onChange={event => setPassword(event.target.value)}/>

            <br />

            <button className="login-btn" onClick={() => {
                alert('Login exitoso')
            }}>Entrar</button>
		</form>
        </div>
	);
};
