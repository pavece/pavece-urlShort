import React, { useEffect, useState } from "react";
import AppUrlComponent from "./appUrlComponent";
import {
	localAdd,
	localCreate,
	localRead,
	localDeleteById,
} from "../utils/handleLocalStorage";

function AppUrlDisplay(props) {
	const [urls, setUrls] = useState([]);

	useEffect(() => {
		localCreate();
		setUrls(localRead());
	}, []);

	useEffect(() => {
		setUrls(localRead());
		console.log(urls);
	}, [props.update]);

	const reload = () => {
		setUrls(localRead);
	};

	return (
		<div className="app-url-display-container">
			{urls.map(el => (
				<AppUrlComponent
					title={el.siteData.title}
					url={el.originalUrl}
					description={el.siteData.desription}
					id={el.id}
					updateElement={reload}
					systemUrl={el.url}
				/>
			))}
		</div>
	);
}

export default AppUrlDisplay;
