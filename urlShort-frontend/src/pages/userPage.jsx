import React, { useState } from "react";
import Nav from "../components/nav";

import AppUrlDisplay from "../components/appUrlDisplay";
import AppCreateNew from "../components/appCreateNew";

function UserPage() {
	const [newUrl, setNewUrl] = useState(null);

	const addUrl = e => {
		setNewUrl(e);
	};
	return (
		<>
			<Nav />
			<div className="app-page-container">
				<AppCreateNew onUrlAdd={e => addUrl(e)} />
				<AppUrlDisplay update={newUrl} />
			</div>
		</>
	);
}

export default UserPage;
