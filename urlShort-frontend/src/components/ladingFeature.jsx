import React from "react";

function LandingFeautre(props) {
	return (
		<div className="feature">
			<div className="feature-icon">{props.children}</div>
			<div className="feature-text">
				<p>{props.text}</p>
			</div>
		</div>
	);
}

export default LandingFeautre;
