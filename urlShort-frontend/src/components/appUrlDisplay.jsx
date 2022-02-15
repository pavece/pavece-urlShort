import React, { useEffect, useState } from "react";
import AppUrlComponent from "./appUrlComponent";
import {
	localAdd,
	localCreate,
	localRead,
	localDeleteById,
} from "../utils/handleLocalStorage";
import NoElements from "./noElements";
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
			{urls[0] ? (
				urls.map(el => (
					<AppUrlComponent
						title={el.siteData.title}
						url={el.originalUrl}
						description={el.siteData.desription}
						id={el.id}
						updateElement={reload}
						systemUrl={el.url}
					/>
				))
			) : (
				<NoElements />
			)}
		</div>
	);
}

export default AppUrlDisplay;
