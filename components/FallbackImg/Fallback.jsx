import { useState } from "react";
import "./FallbackImg.css";

export const FallbackImg = () => {
	const [hasError, setHasError] = useState(false);

	const handleError = () => {
		setHasError(true);
	};

	const src = "https://ejemplo.com/imagen-erronea.jpg"; 
	const fallbackSrc = "https://puppis.blog/wp-content/uploads/2022/02/abc-cuidado-de-los-gatos-min.jpg";

	if (hasError) {
		return (
			<div className="fallback-container">
				<img src={fallbackSrc} alt="Imagen fallback" className="fallback-image" />
				<p className="fallback-text">Imagen alternativa cargada</p>
			</div>
		);
	}

	return <img src={src} alt="Imagen principal" onError={handleError} className="main-image" />;
};
