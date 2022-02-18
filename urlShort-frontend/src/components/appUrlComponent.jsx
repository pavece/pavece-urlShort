import React from "react";
import axios from "axios";
import { localDeleteById } from "../utils/handleLocalStorage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AppUrlComponent(props) {
	const deleteElement = () => {
		localDeleteById(props.id);
		try {
			axios.delete(`http://localhost:5000/api/delete/${props.id}`);
		} catch (error) {
			console.log(error);
		}
		props.updateElement();
	};

	const copyUrl = () => {
		navigator.clipboard.writeText(props.systemUrl);
		toast.success("Link copied to clipboard");
	};
	return (
		<div className="url-component-container">
			<div className="url-component-info">
				<div className="url-component-favicon"></div>
				<h1 className="url-component-title">{props.title}</h1>
				<a className="url-component-url" href={props.url}>
					{props.url}
				</a>
				<p className="url-component-description">{props.description}</p>
			</div>
			<div className="url-component-buttons">
				<button className="copy-button" onClick={copyUrl}>
					Copy link
				</button>
				<button className="delete-button" onClick={deleteElement}>
					Delete
				</button>
			</div>
		</div>
	);
}

export default AppUrlComponent;
