import React from "react";

function AppUrlComponent(props) {
	return (
		<div className="url-component-container">
			<div className="url-component-info">
				<div className="url-component-favicon"></div>
				<h1 className="url-component-title">{props.title}</h1>
				<p className="url-component-url">{props.url}</p>
				<p className="url-component-description">{props.description}</p>
			</div>
			<div className="url-component-buttons">
				<button className="copy-button">Copy link</button>
				<button className="delete-button">Delete</button>
			</div>
		</div>
	);
}

export default AppUrlComponent;
